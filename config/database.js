const sequelize = require("sequelize");
const config = require('./config.json');

const database = new sequelize(
    config.database.mysql_database,
    config.database.mysql_user,
    config.database.mysql_password,
    {
        host:config.database.mysql_host,
        port:config.database.mysql_port,
        dialect:"mysql",
    }
);

module.exports = database;