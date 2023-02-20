// const { DataTypes } = require('sequelize/types');
const {Sequelize, sequelize} = require('./db');

// TODO - define the Band model
const Band = sequelize.define('Band', {
    name: {
        type: Sequelize.STRING
    },
    genre: {
        type: Sequelize.STRING
    },
    showCount: {
        type: Sequelize.INTEGER
    }
})


module.exports = {
    Band
};