const express = require('express');
const fileUpload = require('express-fileupload');
const bcrypt = require("bcrypt");
// const session = require("express-session");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const PORT = 8080;

const SECRET_KEY = "secret"

app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/',
    safeFileNames: true,
    limits: {
        fileSize: 2000000    // Around 2MB
    },
    abortOnLimit: true
}));

const saltRounds = 10

const db = require('./models');

const { User, Meme } = require("./models");
const {where} = require("sequelize");

User.hasMany(Meme)
Meme.belongsTo(User)

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@stud\.acs\.upb\.ro$/;
const passwordRegexp = /^.{8,32}$/;
const usernameRegexp = /^.{8,32}$/;

// TODO: Remove alter option
db.sequelize.sync({ alter: true}).then((req) => {
    app.listen( PORT, () => {
        console.log(`it's alive on http://localhost:${PORT}`);
    });
});


//<editor-fold desc="Meme API">
app.get('/memes', (req, res) => {
    Meme.findAll().then((memes) => {
        res.status(200).send(memes);
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/memes/:id', (req, res) => {
    const { id } = req.params;

    Meme.findOne({ where: {id: `${id}`}}).then((meme) => {
        if (meme == null){
            res.status(404).send({error: `Meme with ID: ${id} doesn't exists.`});
            console.log(`Meme with ID: ${id} doesn't exists.`);
        } else{
            res.status(200).send(meme);
        }
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/images/:filename', (req, res) => {
    const {filename} = req.params;

    const file = `./upload/${filename}`
    res.download(file);
})

app.post('/memes', authenticateToken, (req, res) => {
    if (req.user) {
        const { image } = req.files
        const {description} = req.body
        let memeCreated = true;

        console.log(req.files)

        // Check image file
        // Move the uploaded image to our upload folder
        if(image) {
            console.log(image)
            // If it does not have image mime type prevent from uploading
            if (!/^image*/.test(image.mimetype)) return res.status(400).send({message: "This file is not an image"});

            image.mv(__dirname + '/upload/' + image.name);
        }

        if (description == null){
            res.status(400).send({
                message: "Meme must have description"
            })
        } else if (description.length > 2500) {
            res.status(400).send({
                description: "the field must be maximum 2500 characters"
            })
        } else {
            User.findOne({ where: { username: `${req.user.username}`}}).then((currentUser) => {
                if (image){
                    Meme.create({
                        description: `${description}`,
                        filename: `${image.name}`,
                        UserId: `${currentUser.id}`
                    }).catch(err => {
                        if (err) {
                            console.log(err);
                            memeCreated = false;
                        }
                    })
                } else{
                    Meme.create({
                        description: `${description}`,
                        UserId: `${currentUser.id}`
                    }).catch(err => {
                        if (err) {
                            console.log(err);
                            memeCreated = false;
                        }
                    })
                }
                res.status(200).send({
                    memeCreated: `${memeCreated}`
                })

            })
        }
    } else{
        res.status(401).send({
            message: "The user should be logged in to create a meme"
        })
    }
});

app.patch('/memes/:id', authenticateToken, (req, res) => {
    if (req.user) {
        const { id } = req.params;
        const {description} = req.body

        if (description.length > 2500) {
            res.status(400).send({
                description: "the field must be maximum 2500 characters"
            })
        } else {
            User.findOne({ where: { username: `${req.user.username}`}}).then((currentUser) => {
                Meme.findOne({ where: {id: `${id}`}}).then((meme) => {
                    if (meme == null){
                        res.status(404).send({error: `Meme with ID: ${id} doesn't exists.`});
                        console.log(`Meme with ID: ${id} doesn't exists.`);
                    } else{
                        if (meme.UserId == currentUser.id){
                            meme.description = `${description}`;
                            meme.save();

                            res.status(200).send(meme);
                        } else{
                            res.status(403).send({message: "You can modify only your memes"});
                        }
                    }
                }).catch((err) => {
                    console.log(err);
                })
            }).catch((err) => {
                console.log(err);
            })
        }
    }
})

app.delete('/memes/:id', (req, res) => {
    if (req.user) {
        const { id } = req.params;

        User.findOne({ where: { username: `${req.user.username}`}}).then((currentUser) => {
            Meme.findOne({ where: {id: `${id}`}}).then((meme) => {
                if (meme == null){
                    res.status(404).send({error: `Meme with ID: ${id} doesn't exists.`});
                    console.log(`Meme with ID: ${id} doesn't exists.`);
                } else{
                    if (meme.UserId == currentUser.id){
                        meme.destroy();
                        res.status(200).send({memeDeleted: true});
                    } else{
                        res.status(403).send({message: "You can modify only your memes"});
                    }
                }
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        })
    }
})

//</editor-fold>

//<editor-fold desc="User API">
app.post('/register', (req, res) => {
    const { email, username, password } = req.body

    let missingFields = {};

    if (email == null){
        missingFields.email = "is missing";
    }
    if (username == null){
        missingFields.username = "is missing";
    }
    if (password == null){
        missingFields.password = "is missing";
    }

    if (Object.keys(missingFields).length === 0) {

        let userCreated = true;
        let hashedPassword;

        // Validation

        let validationErrors = {};

        if (!emailRegexp.test(email)){
            validationErrors.email = ["the field must be a valid email ", "the field must end in @stud.acs.upb.ro"];
        }
        if (!usernameRegexp.test(username)){
            validationErrors.username = ["the field is not between 8 and 32 characters"];
        }
        if (!passwordRegexp.test(password)){
            validationErrors.password = ["the field is not between 8 and 32 characters"];
        }

        if (Object.keys(validationErrors).length === 0) {

            // Password hashing
            bcrypt
                .hash(password, saltRounds)
                .then(hash => {
                    console.log('Hash ', hash);
                    hashedPassword = hash;

                    User.create({
                        email: `${email}`,
                        username: `${username}`,
                        password: `${hash}`
                    }).then((createdUser) => {
                        res.status(200).send({
                            id: `${createdUser.id}`,
                            email: `${createdUser.email}`,
                            username: `${createdUser.username}`,
                            password: `${password}`
                        })
                    }).catch(err => {
                        if (err) {
                            console.log(err);
                            userCreated = false;
                        }
                    })
                })
                .catch(err => console.error(err.message));
        } else{
            res.status(400).send(validationErrors);
        }
    } else{
        res.status(400).send(missingFields);
    }
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;

    let missingFields = {};

    if (username === null){
        missingFields.username = "is required";
    }
    if (password === null){
        missingFields.password = "is required";
    }

    if (Object.keys(missingFields).length === 0) {

        User.findOne({where: {username: `${username}`}}).then((user) => {
            if (user === null){
                res.status(400).send({message: "Wrong username or password"});
            } else {
                bcrypt
                    .compare(password, user.password)
                    .then((correct) => {
                        if (correct) {
                            const user = {username: `${username}` };

                            jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {algorithm: 'HS256', expiresIn: "10h"}, (err, token) => {
                                res.status(200).json({token: `${token}`});
                            });
                        } else {
                            res.status(400).send({message: "Invalid username or password"})
                        }
                    })
                    .catch(err => console.error(err.message))
            }
        })
    } else{
        res.status(400).send(missingFields);
    }
});

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.send(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, {algorithm: 'HS256'}, (err, user) => {
        if(err) return res.send(403)
        req.user = user
        next()
    })

}
//</editor-fold>