const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }]
    },
    {
        question: "Which is the samllest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri Lanka", correct: false }]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true }]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Oceania", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false }]
     }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let questionIndex = 0;
let score = 0;

function startQuiz() {
    questionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion() {
    answerButton.innerHTML = " ";
    let currentQuestion = questions[questionIndex];
    let questionNum = questionIndex + 1;
    questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function showScore() {
    answerButton.innerHTML = " ";
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton() {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (questionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();