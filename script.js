// Globla Scope
const startQuiz = document.getElementById("startQuiz");
// var timer = document.querySelector("#timer");
var restart = document.querySelector("#restart");
var timeLeft;
var correctAnswer;


console.log("timer");
//console.log(timeLeft)
var start;
// var stop = clearInterval(start);


function newPage () {
    window.location.href= ("questions.html");
    quizStart();
}

function quizStart() {
    timeLeft = 10;
    start = setInterval(startTimer, 1000);
    // window.location.href= ("questions.html");


}

function startTimer() {

    console.log(timeLeft);


    if (timeLeft <= 0) {
        clearInterval(start);

        scoreBoard();
    } else {
       var timer = document.getElementById("timer")
        timer.innerHTML = timeLeft;
        timeLeft--;
    }
}

function scoreBoard() {
    window.location.replace("highscores.html");
    
}





startQuiz.addEventListener('click', quizStart);
