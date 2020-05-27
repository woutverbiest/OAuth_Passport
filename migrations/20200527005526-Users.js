"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement:false,
      },
      username: {
        type: Sequelize.STRING,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
  },
};
