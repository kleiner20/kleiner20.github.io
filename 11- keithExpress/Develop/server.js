// Dependencies
// =============================================================
var express = require("express");
var htmlRoutes =require( "./routes/htmlRoutes.js")
var apiRoutes = require("./routes/apiRoutes.js")
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);
//follow same format as above for api routes, if someone hits the endpoint "/api"

//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);  //redundant?

//app.use(app.router);
//routes.initialize(app);



// var notes = [
//   {
//     id: 0,
//     title: "Daily Notes",
//     text: "Where I will keep my notes 1",
//   }];



// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  