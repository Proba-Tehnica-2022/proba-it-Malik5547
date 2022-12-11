const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.json());


const db = require('./models');

const { User, Meme } = require("./models");
const {where} = require("sequelize");

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