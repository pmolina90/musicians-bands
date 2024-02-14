const { db, DataTypes, Model } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

// TODO - define the Song model
class Song extends Model {};

Song.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER
}, {
    Sequelize: db,
    modelName: "Song"
});


module.exports = {
    Song
};