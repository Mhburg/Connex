const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Flashcard extends Model {}

Flashcard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    flashcard_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'flashcard',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'flashcard',
  },
);

module.exports = Flashcard;
