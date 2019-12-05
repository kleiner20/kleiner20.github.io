var router = require("express").Router();
var log = require("../db/log");


// Displays all notes
router.get("/api/notes", function(req, res) {
    return res.json();
  });
  
  // Displays a single character, or returns false
  router.get("/api/notes/:id", function(req, res) {
    var chosen = req.params.id;
  
    console.log(chosen);
  
    for (var i = 0; i < notes.length; i++) {
      if (chosen === notes[i].routeName) {
        return res.json(notes[i]);
      }
    }
  
    return res.json();
  });
  
  // Create New notes - takes in JSON input
 router.post("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNote = req.body;
  
    console.log(nesNote);
  
    notes.push(nesNote);
  
    res.json(nesNote);
  });


  module.exports = router;