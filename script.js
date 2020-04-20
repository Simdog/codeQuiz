var startQuiz = document.querySelector("#startQuiz");
var timer = document.querySelector("#timer");
var restart = document.querySelector("#restart");
var questions = document.querySelector("questions.html")
var timeLeft = 60;

console.log("timer");
console.log(timeLeft)
var start = setInterval(startTimer, 1000);

function quizStart(){
    window.location.replace("questions.html");
   
   

}

function startTimer() {
    console.log(timeLeft)
     timer.innerHTML = timeLeft
     timeLeft--;
    
     if (timeLeft <= 0) {
        clearInterval(start);
        window.location.replace("highscores.html")
}
}









startQuiz.addEventListener("click", quizStart);














