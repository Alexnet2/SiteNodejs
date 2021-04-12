const { Sequelize, sequelize } = require("./connection");

const Posts = sequelize.define("posts", {
  title: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.STRING,
  },
});

const create = ({ title, content }) => {
  return new Promise((resolve, reject) => {
    Posts.create({
      title: title,
      content: content,
    })
      .then((resp) => {
        resolve(resp.dataValues);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const deletePost = ({ id }) => {
  return new Promise((resolve, reject) => {
    Posts.destroy({
      where: {
        id: id,
      },
    })
      .then((resp) => {
        resolve(resp);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getAll = () => {
  return new Promise((resolve, reject) => {
    Posts.findAll({
      order: [["id", "Desc"]],
    })
      .then((resp) => {
        resolve(resp);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  create,
  getAll,
  deletePost
};
// Posts.sync({ force: true });
