// const { DataTypes } = require('sequelize/types');
const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model
const Musician = sequelize.define('Musician', {
    name: {
        type: Sequelize.STRING
    },
    instrument: {
        type: Sequelize.STRING
    }
})

module.exports = {
    Musician
};