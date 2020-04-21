//Global Scope
var start = document.getElementById("startQuiz");
var t = document.getElementById("timer");
var timeLeft = 10;
var socere = 0;
 var time = setInterval (startTimer, 1000);

function startQ() {
//first redirect to questions page
 window.location.assign("questions.html");
//then start the timer

}

function pageRedirect() {
    
}

function startTimer() {
    
     

    if (timeLeft <= 0) {
        clearInterval(time);
        
    } else {
        t.innerHTML = timeLeft;  
        timeLeft--;
    }
}

const questions = [
    {
        question: "what is 2 + 2", 
        answers: [
            {text: "4", correct: true},
            {text: "69", correct: false}
        ]
    }
]

start.addEventListener("click", startQ);