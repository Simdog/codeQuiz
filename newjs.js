//Global Scope
var start = document.getElementById("startQuiz");
var t = document.getElementById("timer");
var timeLeft = 3;
var score = 0;
var hidden = document.querySelector(".hide");
hidden.style.display = "none";
var shuffledQuestions;
var currentQuestions;
var askQuestion = document.getElementById("questions");

 
 
function setNextQuestion() {

    askQuestion.innerHTML = questions[0].question;
    console.log(questions[0]);
}


function startQ() { 
    // hide the intorduction 
    var hide = document.getElementById("hide");
    if (hide.style.display === "none") {
        hide.style.display = "block";
        
    } else {
        hide.style.display = "none";
        hidden.style.display = "block";
        startTimer();
        var time = setInterval (startTimer, 1000);
    }
//first redirect to questions page
//  window.location.assign("questions.html");
//then start the timer
currentQuestions = 0;
setNextQuestion();

}



// function pageRedirect() {
    
// }

function startTimer() {
    
    

    if (timeLeft < 0) {
        clearInterval(startTimer);
        timeLeft = ("0");


        
    } else {
        t.innerHTML = timeLeft;  
        timeLeft--;
    }
}

var questions = [
    {
        question: "what is 2 + 2", 
        answers: [
            {text: "4", correct: true},
            {text: "69", correct: false},
            {text: "22", correct: false},
            {text : "2", correct: false}
              
        ]
    }
]

start.addEventListener("click", startQ);