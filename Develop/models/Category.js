const { Model, DataTypes } = require('sequelize');

const Sequelize = require('../config/connection');


class Category extends Model {}

Category.init(
  {
    // define columns
   
  }
);

module.exports = Category;

