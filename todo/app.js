var express = require("express");
// var express = require("body-parser");
var router = require('./routes/index.js');  //retrieve from routes
var db = require('./db/db');


// Set up the express app
const app = express();

// Parse incoming requests data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Incoming URL requests 
app.use(express.urlencoded({ extended: false }));
app.use(router);

// get all todos
app.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});

//Endpoint
app.post('/api/v1/todos', (req, res) => {
  if(!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
  } else if(!req.body.description) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    });
  }
 const todo = {
   id: db.length + 1,
   title: req.body.title,
   description: req.body.description
 }
 db.push(todo);
 return res.status(201).send({
   success: 'true',
   message: 'note added successfully',
   todo
 })
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});