var quizContainer = document.getElementById('quiz');
// var enterQuestion = document.getElementById('question');
var quizButton = document.getElementById('qBtn'); //done

var question = document.getElementById('#question'); 


   //Questions and answers saved in an object
var questions = [];
   questions = [
    {
      title: "The best team in the NFL is...:",
      choices: ["Cowboys", "Vikings", "Packers",],
      answer: "Packers"
    },
    {
      title: "Where is the best place to scooter or ride your bike?",
      choices: ["street", "sidewalk", "jumps"],
      answer: "sidewalk"
    },
    {
        title: "Best activity on a rainy day?",
        choices: ["movie", "boardgames", "reading"],
        answer: "boardgames"
      },
      {
        title: "What is the best kind of choclate?",
        choices: ["white", "milk", "dark"],
        answer: "dark"
      },
      {
        title: "Who is the funniest comedia?",
        choices: ["Martin Lawrence", "Kevin Hart", "Dave Chapelle"],
        answer: "Kevin Hart"
      },
  ];

   //link to highscores page
   function visitScores(){
    location.href='highScores.html';
   }
   function buildQuiz(){
   }
   function startQuiz(){                  //Start of the quiz page
   location.href='quiz.html';
   }
   
   
  //  "lastname - " +  frndLst[onefrnd].lastName + " and phoneNumber " + frndLst[onefrnd].phoneNumber ;

   
  //  for (i = 0; i < questions.length; i++) {
    // enterQuestion.innerHTML(questions.title[0]);
   

   function startQ(){                  //Start of the quiz page
    console.log("Test");
      quiz.getElementById("question").innerHTML = "Hello World";
    }
   
  //  questions.title[0];
   // display quiz right away
//    buildQuiz();

    // on submit, show results
    // quizButton.addEventListener('click', startQ(){
    // }
    // });
   
   // on submit, show results
  //  submitButton.addEventListener('click', showResults
     
    //   question.innerHTML = questions.title[i];
    //  answer1.innerHTML = questions.title.choices[i];
    //  i + 1;
    //  answer2.innerHTML = questions.title[i];
    //  i + 1
    //  answer3.innerHTML = questions.title[i];
     
   
  