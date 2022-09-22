var startButton = document.querySelector(".start-button");
var questionContainerEl = document.querySelector(".question");
var answerContainerEl = document.querySelector("#answer-buttons");
var headerEl = document.querySelector(".headers");
var answeredButtons = document.querySelectorAll(".answer-btn");
var answerDisplayEl = document.querySelector(".displayAnswer");
var endGameEl = document.querySelector(".results");
var finalScore = document.querySelector("#finalScore");
var score = 0;
var submitButton = document.querySelector("#submitBtn");
var scoreLinkEl = document.querySelector("#scoreLink");

// create array of questions for quiz
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: 'Hyper Training Makeup Language', correct: false },
            { text: 'Hyper Text Marking Language', correct: false },
            { text: 'Hyper Text Markup Languge', correct: true },
            { text: 'Hyper Text Markup Level', correct: false }

        ]
    },
    {
        question: "Which is an example of a self-closing tag?",
        answers: [
            {text: "<a>", correct: false},
            {text: "<img>", correct: true},
            {text: "<span>", correct: false},
            {text: "<input>", correct: false}
        ]
    },
    {
        question: "Which of these can only hold one object?",
        answers: [
            {text: "class", correct: false},
            {text: "span", correct: false},
            {text: "div", correct: false},
            {text: "id", correct: true}
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            {text: "Color and Style Sheets", correct: false},
            {text: "Cascading Style Sheets", correct: true},
            {text: "Cascade Sheets Style", correct: false},
            {text: "Coded Style Sheet", correct: false}
        ]
    },
    {
        question: "Which statement cannot be used to declare a variable in JavaScript?",
        answers: [
            {text: "Let", correct: true},
            {text: "Var", correct: false},
            {text: "Const", correct: false},
            {text: "Int", correct: false}
        ]
    }
]

// event listener to initialize game upon button click
startButton.addEventListener("click", startGame);

// determine if the selected button answer is correct with event listener

for (const answerBtn of Array.from(answeredButtons)) {
    answerBtn.addEventListener("click", isCorrect);
    
}

// event handler for when user submits their score and initials to score board
submitButton.addEventListener("click", makeScore);


// create function to initialize the game by hiding start button and instructions and showing first question
function startGame() {
    startButton.classList.add("hide");
    headerEl.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    answerContainerEl.classList.remove("hide"); 
    setQuestion();
}

// iterate through questions array and show one at a time for user to answer
function setQuestion() {
    var question = questions.shift();
    questionContainerEl.textContent = question.question;
    
    for (const answerButton of answerContainerEl.children) {
        var answer = question.answers.shift();
        answerButton.textContent = answer.text;
        answerButton.dataset.correct = answer.correct;
    }
    
}

// determine if selected button is correct answer and display it
function isCorrect() {
    answerDisplayEl.classList.remove("hide");
    if(this.dataset.correct == "true") {
        answerDisplayEl.textContent = "Correct!"
        score += 5;
    } else {
        answerDisplayEl.textContent = "Wrong!"
    }
    
    if(questions.length > 0) {
        setQuestion();
    } else {
        endGame();
    }
}

//function to handle finishing the game and calculating score
function endGame() {
    answerDisplayEl.classList.add("hide");
    questionContainerEl.classList.add("hide");
    answerContainerEl.classList.add("hide"); 
    endGameEl.classList.remove("hide");

    finalScore.textContent = score;

}

function makeScore() {
    
}
