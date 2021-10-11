'use strict';
const loader = require('./sequelizeLoader');
const Sequelize = loader.Sequelize;

const grasscount = loader.database.define(
  '草-ipamj明朝counts',
  {
    userId: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    realName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    displayName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    grasscount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    freezeTableName: false,
    timestamps: true,
    indexes: [
      {
        fields: ['草-ipamj明朝count']
      }
    ]
  }
);

module.exports = grasscount;
