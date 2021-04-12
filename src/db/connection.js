const Sequelize = require("sequelize");

const sequelize = new Sequelize("dosee", "postgres", "mefisto13", {
  host: "localhost",
  dialect: "postgresql",
});

module.exports = { Sequelize, sequelize };
