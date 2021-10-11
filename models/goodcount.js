'use strict';
const loader = require('./sequelizeLoader');
const Sequelize = loader.Sequelize;

const 草-ipamj明朝count = loader.database.define(
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
    草-ipamj明朝count: {
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

module.exports = 草-ipamj明朝count;
