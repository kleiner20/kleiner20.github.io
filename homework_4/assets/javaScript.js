var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var quizButton = document.getElementById('start'); //done


   //Questions and answers saved in an object
   var questions = [
    {
      title: "The best team in the NFL is...:",
      choices: ["Cowboys", "Vikings", "Packers", "Steelers"],
      answer: "Packers"
    },
    {
      title: "Where is the best place to scooter or ride your bike?",
      choices: ["street", "sidewalk", "jumps", "Minnesota"],
      answer: "sidewalk"
    },
    {
        title: "Best activity on a rainy day?",
        choices: ["movie", "boardgames", "reading", "nerfwars"],
        answer: "boardgames"
      },
      {
        title: "What is the best kind of choclate?",
        choices: ["white", "milk", "dark", "orange"],
        answer: "dark"
      },
      {
        title: "Who is the funniest comedia?",
        choices: ["Martin Lawrence", "Kevin Hart", "Dave Chapelle", "Dane Cook"],
        answer: "Kevin Hart"
      },
  ];

   //link to highscores page
   function visitScores(){
    location.href='highScores.html';
   }
   function buildQuiz(){
   }
   function startQuiz(){
   location.href='quiz.html';
   }
   // display quiz right away
//    buildQuiz();

    // on submit, show results
    quizButton.addEventListener('click', startQuiz);
   
   // on submit, show results
   submitButton.addEventListener('click', showResults);



  