//button on index page starts quiz
var quizContainer = document.getElementById('quiz'); 
//defines quesion
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit'); 
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");

var runningQuestion = 0;
var correctAnswers = 0;  //undefined
var quizOver = false;    //undefined


var output = [];  //not in example
   //Questions and answers saved in an object
   var questions = [{
      question: "The best team in the NFL is...:",
      choices: {
        a: "Cowboys", 
        b: "Vikings", 
        c: "Packers", 
      },
      correctAnswer: "Packers"
    },{
      question: "Where is the best place to scooter or ride your bike?",
      choices: {
        a: "street", 
        b: "sidewalk", 
        c: "jumps", 
      },
      correctAnswer: "sidewalk"
    }, {
        question: "Best activity on a rainy day?",
        choices: {
        a:"movie",
        b: "boardgames", 
        c: "reading",
        },
        correctAnswer: "boardgames"
      }, {
        question: "What is the best kind of choclate?",
        choices: {
        a: "white", 
        b: "milk", 
        c: "dark", 
    },
        correctAnswer: "dark"
      },{
        question: "Who is the funniest comedia?",
        choices: {
          a: "Martin Lawrence", 
          b: "Kevin Hart", 
          c: "Dave Chapelle", 
        },
        correctAnswer: "Kevin Hart"
      }
  ];



  $(document).ready(function () {

// render a question
function renderQuestion(){
  var q = questions[runningQuestion];
  
  quiz.innerHTML = "<p>"+ q.question +"</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}







   //link to highscores page
   function visitScores(){
    location.href='highScores.html';
   }
   function quizPage(){
    location.href='quiz.html';
    renderQuestion();
   }
   //Building the page
   function buildQuiz(){

       var output = [];
       myQuestions.forEach(currentQuestion, questionNumber);
       var answers = [];
       for(letter in currentQuestion.answers){
         //html radio button
        answers.push(
            <label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>
          );
        }
        output.push( 
          '<div class="question"> $(currentQuestion.question) </div>;
          <div class="answers"> ${answers.join('')} </div>'
        );
        }
        );
       
       function showResults(){
       }
  
    // on submit, show results
    submitButton.addEventListener('click', showResults());

 
