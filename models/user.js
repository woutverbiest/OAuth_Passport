const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define(
  "user",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
