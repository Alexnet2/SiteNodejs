const { create, getAll, deletePost } = require("../db/posts");
const Card = (app) => {
  app
    .route("/card")
    .get(async (req, res) => {
      const posts = await getAll();
      const year = new Date().getFullYear()
      res.render("card/index", { posts: posts,date:`2020-${year}` });
    })
    .post(async (req, res) => {
      const { title, content } = req.body;
      create({
        title,
        content,
      })
        .then((resp) => {
          res.status(200).redirect("/card");
        })
        .catch((error) => {
          res.status(500).send(JSON.stringify(error));
        });
    });
  app.route("/card/delete").post((req, res) => {
    const { id } = req.body;
    console.log(id)
    deletePost({
      id,
    })
      .then((resp) => {
        res.status(200).redirect("/card");
      })
      .catch((error) => {
        res.status(500).send(JSON.stringify(error));
      });
  });
  app.route("/card/add").get((req, res) => {
    res.render("card/form");
  });
};

module.exports = Card;
