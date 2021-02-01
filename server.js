const express = require("express");
const bodyParser = require("body-parser");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Requiring our models for syncing
// const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
