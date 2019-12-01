// Dependencies
// =============================================================
var express = require("express");
var htmlRoutes = "./routes/htmlRoutes.js"
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", htmlRoutes);
//follow same format as above for api routes, if someone hits the endpoint "/api"

var notes = [
  {
    id: 0,
    title: "Daily Notes",
    text: "Where I will keep my notes 1",
  }];



// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  