const express = require('express');
const bcrypt = require("bcrypt");
const session = require("express-session");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(session({
    secret: "secret",
    cookie: {
        sameSite: 'strict',
        maxAge: 60 * 1000 // 1 minute
    }
}));
const saltRounds = 10

const db = require('./models');

const { User, Meme } = require("./models");
const {where} = require("sequelize");


//<editor-fold desc="Meme API">
db.sequelize.sync().then((req) => {
    app.listen( PORT, () => {
        console.log(`it's alive on http://localhost:${PORT}`);
    });
});

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

app.post('/memes', (req, res) => {
    const { description } = req.body
    let memeCreated = true;

    Meme.create({
        description: `${description}`
    }).catch(err => {
        if (err){
            console.log(err);
            memeCreated = false;
        }
    })

    res.status(200).send({
        memeCreated: `${memeCreated}`
    })
});

app.patch('/memes/:id', (req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    Meme.findOne({ where: {id: `${id}`}}).then((meme) => {
        if (meme == null){
            res.status(404).send({error: `Meme with ID: ${id} doesn't exists.`});
            console.log(`Meme with ID: ${id} doesn't exists.`);
        } else{
            meme.description = `${description}`;
            meme.save();

            res.status(200).send(meme);
        }
    }).catch((err) => {
        console.log(err);
    })
})

app.delete('/memes/:id', (req, res) => {
    const {id} = req.params;

    Meme.destroy({where: {id: `${id}`}});

    res.status(200).send({
        memeDeleted: 'true'
    })
})

//</editor-fold>

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
            .catch(err => console.error(err.message))
    } else{
        res.status(400).send(missingFields);
    }
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;

    let missingFields = {};

    if (username == null){
        missingFields.username = "is required";
    }
    if (password == null){
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
                            req.session.user = user;
                            req.session.authorized = true;
                            res.status(200).send({cookie: `${req.session.id}`});
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