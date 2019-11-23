const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

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
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "color",
      message: "What is your favorite color?"
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL."
    }
  ]);
}
function getProfile(response){

       //user name
       var userID = response.data.id;
       console.log(userID);
       $(".userID").text("My user ID is " + userID);
 
  // var githubToken = process.env.GITHUB_TOKEN;
 
 };
function generateHTML(answers, myGitInfo) { console.log(myGitInfo.bio);
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
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <h1 class="display-4">I can pull the ${myGitInfo.bio} but not represent the data in the literal</h1>
    
    
    <h3>Links <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
<script src="index.js"></script>
</body>
</html>`;
}

async function init() {
  console.log("hi");
  try {
    const answers = await promptUser();

    // const profile = getProfile(answers);
    const myGitInfo = await axios.get("https://api.github.com/users/" + answers.github);
   

    const html = await generateHTML(answers, myGitInfo.data);
   

    await writeFileAsync("index.html", html);

    console.log("Successfully wrote to index.html");
 
  } catch (err) {
    console.log(err);
  }
}

init();
