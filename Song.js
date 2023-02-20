const{sequelize, Sequelize} = require('./db')

const Song = sequelize.define('Song', {
    title: {
        type: Sequelize.STRING
    },
    year: {
        type: Sequelize.INTEGER
    }
})

module.exports = {
    Song
}