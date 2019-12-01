var path = require("path");
var router = require("express").Router();

// Basic route that sends the user first to the AJAX Page
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public.index.html"));
  });
  
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });


module.exports = routes;

