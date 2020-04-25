//Global Scope
var start = document.getElementById("startQuiz");
var t = document.getElementById("timer");
var timeLeft = "";
var score = 0;
var hidden = document.querySelector(".hide");
hidden.style.display = "none";
var currentQuestion;
var askQuestion = document.getElementById("questions");
var getAnswer = document.getElementById("answers");
var ansBtn = document.querySelector(".btn");


function setNextQuestion() {

    clearQuestion();


    // console.log(questions[0]);
    // ansBtn.innerHTML = questions[0].answers.text;
    askQuestion.innerHTML = questions[currentQuestion].question;
    console.log(questions[currentQuestion].question);

    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
        var simdog = document.createElement("button");
        simdog.innerHTML = questions[currentQuestion].answers[i].text;
        console.log(questions[currentQuestion].answers[i].text);
        simdog.addEventListener("click", runThis);

        if (questions[currentQuestion].answers[i].correct) {

            simdog.dataset.correct = questions[currentQuestion].answers[i].correct;
        }
        simdog.addEventListener("click", checkAnswer);


        getAnswer.append(simdog);


    }



}

function checkAnswer (choice){
    var c = choice.target.dataset.correct 
    if (c) {
      console.log("You got the correct answer");
    } else {
        timeLeft -= 5;
    }

    

}

function clearQuestion() {

    // var children = getAnswer.children;
    // for (var i = 0; i < children.length; i++) {
    //     console.log(children[i]);
    //     getAnswer.removeChild(children[i]);
    // }
    
    while (getAnswer.firstChild) {
        getAnswer.removeChild(getAnswer.firstChild);
    }
}

function runThis() {
    currentQuestion++;
    if (timeLeft <= 0 || currentQuestion >= questions.length) {
        console.log("gtfo youre done");

    } else {
        setNextQuestion();

    }
}


function startQ() {
    // hide the intorduction 
    timeLeft = 20;
    var hide = document.getElementById("hide");
    if (hide.style.display === "none") {
        hide.style.display = "block";

    } else {
        hide.style.display = "none";
        hidden.style.display = "block";
        startTimer();
        var time = setInterval(startTimer, 1000);
    }
    //first redirect to questions page
    //  window.location.assign("questions.html");
    //then start the timer
    currentQuestion = 0;
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

var questionList = [["what is sim's favorite color?", [[1, false], ["red", true], ["black", false], [3, false]]], ["what is sim's favorite number?", [1, "pink", "yellow", 4]], []]



var listOfcats = [
    {
        color: "Red",
        age: 10,
        children: [
            { name: "caturcus", age: 1 },
            { name: "fang", age: 1.3 },




        ]

    },
    {
        color: "Black",
        age: 4,

    },
    {
        color: "Grey",
        age: 2
    }
]
console.log(listOfcats[0].children[1].age);
console.log(listOfcats[2].color);

var questions = [
    {
        question: "What is 2 + 2?",

        answers: [
            { text: "4", correct: true },
            { text: "69", correct: false },
            { text: "22", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "What is 2 + 100?",
        answers: [
            { text: "102", correct: true },
            { text: "69", correct: false },
            { text: "22", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "What is 9 * 7?",

        answers: [
            { text: "36", correct: false },
            { text: "70", correct: false },
            { text: "63", correct: true },
            { text: "2", correct: false }
        ]
    }
]
// for (var i = 0;i < questions.length;i++){
// console.log(questions[i].question)
// for (let index = 0; index < questions[i].answers.length; index++) {
//     console.log(questions[i].answers[index].text);

// }
// }

// console.log(questionList[0][1][0][1]);

// console.log(questions[0].answers[0].jamal);
// console.log(questions[2].answers[2].text);


// const car = {
//     color: "red",
//     type: "BMW",

//     showcolor: () => {
//         return console.log(this.color);
//     }
// }

start.addEventListener("click", startQ);