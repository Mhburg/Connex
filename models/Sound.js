const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sound extends Model {}

Sound.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    session_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    record: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'sound',
  },
);

module.exports = Sound;
