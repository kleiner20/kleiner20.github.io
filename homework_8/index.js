const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const getGithubUser = require('get-github-user');
const env = require('dotenv').config()
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      username: "github",
      message: "What is your GitHub Username"
    },
    {
      type: "input",
      color: "color",
      message: "What is your favorite color?"
    },
    
    // .then(function({ username }) {
    //   const queryUrl = `https://api.github.com/users/${username}`;
    
    //   axios.get(queryUrl).then(function(res) {
    //     const repoNames = res.data.map(function(repo) {
    //       return repo.name;
  ]);
}

function generateHTML(answers) {
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
    <h1 class="display-4">Hi! My GitHub username is ${answers.username}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
};


function getProfile(answers){
 
 
 var githubToken = process.env.GITHUB_TOKEN;

};
const queryUrl = `https://api.github.com/users/${answers.username}`;

console.log(`${username}`);

 //axios.get('api.github.com' + answers.github, {auth:githubToken}).then(function (response) {
    // handle success
    // console.log(response);

    // //this is where you'd make the actual html
    
    //   const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    
      axios.get(queryUrl).then(function(response) {
        // const repoNames = res.data.map(function(repo) 
          // return response.name;
          console.log(response.name);

      });

async function init() {
  console.log("hi");
  try {
    const answers = await promptUser();

    const html = generateHTML(answers);
    const profile = getProfile(answers);

    await writeFileAsync("index.html", html);

    console.log("Successfully wrote to index.html");
  } catch (err) {
    console.log(err);
  }
};

init();
