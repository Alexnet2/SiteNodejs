require("dotenv").config();
require("./src/db/connection");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const handlebars = require("express-handlebars");

const Card = require("./src/routes/card.route");

// Config
// Template Engine
app.engine(
  "handlebars",
  handlebars({
    defaultLayout: "index",
  })
);
app.set("views", __dirname + "/src/views");

app.set("view engine", "handlebars");


app.use(express.static('src'));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


Card(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listeing on port ${port}`);
});
