const Persona = require('./../model/persona');
const express = require('express');

const app = express();

app.get('/personas', (req, res) => {
    Persona.findAll().then(personas => {
        res.json({
            ok: true,
            personas
        })
    })
})

app.post('/personas', (req, res) => {
    let body = req.body;
    Persona.create({
        nombre: body.nombre,
        telefono: body.telefono,
        direccion: body.direccion
    })
    .then( persona => {
        res.json({
            ok: true,
            persona
        })
    } )
})

app.put('/personas/:id', (req, res) => {
    let body = req.body;
    let id = req.params.id;
    Persona.update(body, {
        where: {
            id
        }
    })
    .then( persona => {
        res.json({
            ok: true,
            persona
        })
    } )
})

app.delete('/personas/:id', (req, res) => {
    let id = req.params.id;
    Persona.destroy({
        where: {
            id
        }
    })
    .then( () => {
        res.json({ok: true,
        message: 'Eliminado correctamente'})
    })

})

module.exports = app;