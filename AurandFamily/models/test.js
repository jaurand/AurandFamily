"use strict";
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var Test = sequelize.define('Test', {
        title: Sequelize.STRING,
        description: Sequelize.TEXT
    });

    return Test;
};