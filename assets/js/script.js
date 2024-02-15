/*quiz questions and answers*/

const questions = [{
        question: "Which one of these is a dragon fruit? ",
        answers: [{
                text: "Passion fruit",
                correct: false
            },
            {
                text: "Dragon fruit",
                correct: true
            },
            {
                text: "Jack fruit",
                correct: false
            },
            {
                text: "Rambutan",
                correct: false
            },
            {
                text: "kiwi fruit",
                correct: false
            },
        ]
    },
    {
        question: "Which of these is scotch bonnet?",
        answers: [{
                text: "Padron pepper",
                correct: false
            },
            {
                text: "Scotch bonnet",
                correct: true
            },
            {
                text: "Romano pepper",
                correct: false
            },
            {
                text: "Bell pepper",
                correct: false
            },
            {
                text: "Black pepper",
                correct: false
            },
        ]
    },
    {
        question: "Which of these is all spice?",
        answers: [{
                text: "Juniper",
                correct: false
            },
            {
                text: "Clove",
                correct: false
            },
            {
                text: "Star Anise",
                correct: false
            },
            {
                text: "All spice",
                correct: true
            },
            {
                text: "Cinnamon",
                correct: false
            },
        ]
    },
    {
        question: "Which of these is mafalde?",
        answers: [{
                text: "Malfade",
                correct: true
            },
            {
                text: "Paccheri",
                correct: false
            },
            {
                text: "Penne",
                correct: false
            },
            {
                text: "Ravioli",
                correct: false
            },
            {
                text: "Tortellini",
                correct: false
            },
        ]
    },
    {
        question: "What is cornish yarg wrapped in?",
        answers: [{
                text: "Muslin Cloth",
                correct: false
            },
            {
                text: "Dock Leaf",
                correct: false
            },
            {
                text: "Hemp leaf",
                correct: false
            },
            {
                text: "Stinging Nettles",
                correct: true
            },
            {
                text: "Bin Bag",
                correct: false
            },
        ]
    },
    {
        question: "Which one of these cut’s of meat is named ‘tomahawk’?",
        answers: [{
                text: "Pork Belly",
                correct: false
            },
            {
                text: "Barnsley Chop",
                correct: false
            },
            {
                text: "Osso Buco",
                correct: false
            },
            {
                text: "T-Bone",
                correct: false
            },
            {
                text: "Tomahawk",
                correct: true
            },
        ]
    },
    {
        question: "Which one of these flowers does saffron come from?",
        answers: [{
                text: "Allum",
                correct: false
            },
            {
                text: "Knapweed",
                correct: false
            },
            {
                text: "Poppy",
                correct: false
            },
            {
                text: "Saffron",
                correct: true
            },
            {
                text: "Spider Lilly",
                correct: false
            },
        ]
    },

    {
        question: "Which bean is miso made from?",
        answers: [{
                text: "Borlotti Bean",
                correct: false
            },
            {
                text: "Broad Bean",
                correct: false
            },
            {
                text: "Jelly Bean",
                correct: false
            },
            {
                text: "Kidney Bean",
                correct: false
            },
            {
                text: "Soya Bean",
                correct: true
            },
        ]
    },
    {
        question: "Which of these is a ‘tuber’?",
        answers: [{
                text: "Aubergine",
                correct: false
            },
            {
                text: "Corn",
                correct: false
            },
            {
                text: "Cucumber",
                correct: false
            },
            {
                text: "Potato",
                correct: true
            },
            {
                text: "Romanesco Cauliflower",
                correct: false
            },
        ]
    },
    {
        question: "Which of these is a langoustine?",
        answers: [{
                text: "Crab",
                correct: false
            },
            {
                text: "Crayfish",
                correct: false
            },
            {
                text: "Tiger Prawn",
                correct: false
            },
            {
                text: "Langoustine",
                correct: true
            },
            {
                text: "Spiney Lobster",
                correct: false
            },
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

/* functions to start quiz, add next button and display next questions*/

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

/* add functions to determine if answers are correct*/

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
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
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

/* function to display score at the end and button to start quiz again*/

function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();