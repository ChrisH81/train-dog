const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connections')

class dog extends Model {}

dog.init(
  {
    clientName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dogName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dogAge: {
      type: DataTypes.INTEGER
    },
    dogBreed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dogSex: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dogSnipped: {
        type: DataTypes.BOOLEAN,
    }
  },
  {
    sequelize
  }
);




module.exports = dog;