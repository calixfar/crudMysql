const Sequelize = require('sequelize');
const sequelize = require('./../index');
const Persona = sequelize.define('persona',{
    id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    telefono: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    direccion: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: false,
})

module.exports = Persona;