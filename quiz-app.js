const quizContainer = document.getElementById("quiz");
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const restartButton = document.getElementById("restart-btn");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: [
      { text: "Harper Lee", correct: true },
      { text: "J.K. Rowling", correct: false },
      { text: "Ernest Hemingway", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  // Add more questions as needed
];

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  questionContainer.classList.remove("hide");
  resultContainer.classList.add("hide");
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.textContent = question.question;
  answerButtonsElement.innerHTML = "";
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    showResult();
  }
}

function showResult() {
  questionContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
  scoreElement.textContent = `Your Score: ${score}`;
}

restartButton.addEventListener("click", startQuiz);

startQuiz();
