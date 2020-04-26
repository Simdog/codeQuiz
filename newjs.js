//Global Scope
var start = document.getElementById("startQuiz");
var t = document.getElementById("timer");
var timeLeft = "";
var score;
var time;
var stopTimer;
var hidden = document.querySelector(".hide");
hidden.style.display = "none";
var currentQuestion;
var askQuestion = document.getElementById("questions");
var getAnswer = document.getElementById("answers");
var hsHide = document.getElementById("hidethis");
hsHide.style.display = "none";
var hsContainer = document.getElementById("highscore-container");
hsContainer.style.display = "none";
var scoreList = document.getElementById("score-list");
var homeButton = document.getElementById("home-btn");
var clearBtn = document.getElementById("clear");
var submit = document.getElementById("submit");


function setNextQuestion() {

    clearQuestion();

    askQuestion.innerHTML = questions[currentQuestion].question;
    //console.log(questions[currentQuestion].question);

    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
        var ansBtn = document.createElement("button");
        ansBtn.innerHTML = questions[currentQuestion].answers[i].text;
        //console.log(questions[currentQuestion].answers[i].text);

        if (questions[currentQuestion].answers[i].correct) {

            ansBtn.dataset.correct = questions[currentQuestion].answers[i].correct;
        }
        ansBtn.addEventListener("click", checkAnswer);
        ansBtn.addEventListener("click", whenAnswerButtonClick);

        getAnswer.append(ansBtn);

    }



}

function checkAnswer(choice) {
    var c = choice.target.dataset.correct
    if (c) {
        console.log("You got the correct answer");
        score += 1;
        console.log(score);
    } else {
        timeLeft -= 5;
    }



}

function clearQuestion() {

    while (getAnswer.firstChild) {
        getAnswer.removeChild(getAnswer.firstChild);
    }
}

function whenAnswerButtonClick() {
    currentQuestion++;
    if (timeLeft <= 0 || currentQuestion >= questions.length) {
        console.log("gtfo youre done");
        clearInterval(stopTimer);
        displayHs();
    } else {
        setNextQuestion();

    }
}


function startQ() {
    // hide the intorduction 
    timeLeft = 60;
    score = 0;
    var hide = document.getElementById("hide");
    if (hide.style.display === "none") {
        hide.style.display = "block";

    } else {
        hide.style.display = "none";
        hidden.style.display = "block";
        stopTimer = setInterval(startTimer, 1000);
        //time = setInterval(startTimer, 1000);
    }
    currentQuestion = 0;
    setNextQuestion();

}


//var stopTimer = startTimer();


function startTimer() {

    if (timeLeft < 0) {
        clearInterval(stopTimer);
        displayHs();
        timeLeft = "0";

    } else {
        t.innerHTML = timeLeft;
        timeLeft--;
    }
}

function displayHs() {

    var final = document.getElementById("finalscore");
    var inputHs = document.getElementById("input-hs");
    final.innerHTML = score;
    hidden.style.display = "none";
    hsHide.style.display = "block";

    submit.addEventListener("click", () => {
        var y = inputHs.value;
        saveScore(y, score);
        console.log(y);
        showHighscore();

    })
}

function showHighscore() {

    for (let index = 0; index < scoreList.childElementCount; index++) {
        scoreList.removeChild(scoreList.firstChild);
    }

    console.log("submit was called");
    hsContainer.style.display = "block";
    hsHide.style.display = "none";
    clearBtn.addEventListener("click", clearHs);
    homeButton.addEventListener('click', resetScreen);

    for (var i = 0; i < localStorage.length; i++) {
        var divChild = document.createElement('div');
        var childName = localStorage.key(i);
        var childScore = localStorage.getItem(localStorage.key(i));

        divChild.innerHTML = "Name of Player:   " + childName + "       Score  " + childScore;

        scoreList.appendChild(divChild);
    }


}

function resetScreen() {
    for (let index = 0; index < scoreList.childElementCount; index++) {
        scoreList.removeChild(scoreList.firstChild);
    }
    //hide the highscore container
    document.getElementById("highscore-container").style.display = "none";

    //bering up the inro container 
    document.getElementById("hide").style.display = "block";
}

function saveScore(y, x) {
    console.log("This is your score " + y + ".       " + x);
    localStorage.setItem(y, x);
}

function clearHs() {
    localStorage.clear();

}

var questions = [
    {
        question: "What does HTML stand for?",

        answers: [
            { text: "Help Telegram Master Lost", correct: false },
            { text: "HyperText Markup Language", correct: true },
            { text: "HyperType Makeup Language", correct: false },
            { text: "Hey There Meddling Lion", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheet", correct: true },
            { text: "Constructing Styling & Spacing", correct: false },
            { text: "Cross Section Style", correct: false },
            { text: "Creating Style Sheet", correct: false }
        ]
    },
    {
        question: "Car is to Carpet, like Java is to ___________?",

        answers: [
            { text: "Javelin", correct: false },
            { text: "Coffee", correct: false },
            { text: "Javascript", correct: true },
            { text: "jQuery", correct: false }
        ]
    },
    {
        question: "What is Bootstrap?",

        answers: [
            { text: "A strap for your boots to stay secure.", correct: false },
            { text: "A javascript library function.", correct: false },
            { text: "A HTML and CSS based design templates.", correct: true },
            { text: "A shortcut for Javascript.", correct: false }
        ]
    },
    {
        question: "How do you define something in Javascript?",

        answers: [
            { text: "Var", correct: true },
            { text: "For", correct: false },
            { text: "If", correct: false },
            { text: "Define", correct: false }
        ]
    }
]


start.addEventListener("click", startQ);