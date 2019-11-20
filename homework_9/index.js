const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "title",
      message: "What is your title?"
    },
    {
      type: "input",
      name: "id",
      message: "What is your ID?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?"
    },
    {
      type: "input",
      name: "office",
      message: "What is your office number?"
    },
  ]);
}

function generateHTML(employees) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h3 class="display-4">${employees.name}</h3>
    <h3>${employees.title} <span class="badge badge-secondary">Contact Info</span></h3>
    <ul class="list-group">
      <li class="list-group-item">ID: ${employees.id}</li>
      <li class="list-group-item">Email: ${employees.email}</li>
      <li class="list-group-item">GitHub: ${employees.office}</li>
    </ul>
  </div>
</div>
<div class="bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header card text-white"><h3>${employees.name}</h3>
  <p><h3>${employees.title}</h3></p></div>
  <div class="card-body text-black">
    <ul class="list-group">
      <li class="list-group-item text-black">ID: ${employees.id}</li>
      <li class="list-group-item">Email: ${employees.email}</li>
      <li class="list-group-item">GitHub: ${employees.office}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

async function init() {
  console.log("Please enter your employee information");
  try {
    const employees = await promptUser();

    const html = generateHTML(employees);

    await writeFileAsync("index.html", html);

    console.log("Successfully wrote to index.html");
  } catch (err) {
    console.log(err);
  }
}

init();
