var startButton = document.querySelector(".start-button");
var questionContainerEl = document.querySelector(".question");
var answerContainerEl = document.querySelector("#answer-buttons");
var headerEl = document.querySelector(".headers");
var answeredButtons = document.querySelector(".answer-btn");
var currentQuestion;
console.log(answeredButtons);

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
    }
]

startButton.addEventListener("click", startGame);

// determine if the selected button answer is correct with event listener
for (const answerBtn of answeredButtons) {
    answerBtn.addEventListener("click", isCorrect);
}

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

// determine if selected button is correct answer
function isCorrect() {
    console.log(this.dataset.correct);

    
}
