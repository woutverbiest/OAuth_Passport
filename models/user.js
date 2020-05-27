const sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define(
  "user",
  {
    id: {
      type: sequelize.String,
      primaryKey: true,
    },
    username: {
      type: sequelize.String,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
