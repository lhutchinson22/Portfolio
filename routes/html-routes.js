// Dependencies
var path = require("path");

// Routes
module.exports = (app) => {
  // index route loads view.html
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/landing.html"));
  });
};
