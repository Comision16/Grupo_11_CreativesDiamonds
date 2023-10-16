'use strict';
/** @type {import('sequelize-cli').Migration} */

const Merch = sequelize.define('Merch', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER
  },
  discount: {
    type: DataTypes.INTEGER
  },
  image: {
    type: DataTypes.STRING(255)
  },
  description: {
    type: DataTypes.TEXT
  },
  exclusive: {
    type: DataTypes.BOOLEAN
  }
});

Merch.belongsTo(Band, { foreignKey: 'bandId' });
Merch.belongsTo(Type, { foreignKey: 'typeId' });

module.exports = Merch;
