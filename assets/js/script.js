const questions = [
    {
        question: "Which one of these is a dragon fruit? ",
        answers: [
            { text: "a", correct: false},
            { text: "b", correct: true},
            { text: "c", correct: false},
            { text: "d", correct: false},
            { text: "e", correct: false},
        ]
    },
    {
        question: "Which of these is scotch bonnet?",
        answers: [
            { text: "a", correct: false},
            { text: "b", correct: true},
            { text: "c", correct: false},
            { text: "d", correct: false},
            { text: "e", correct: false},
        ]
    },
    {
        question: "Which of these is all spice?",
        answers: [
            { text: "a", correct: false},
            { text: "b", correct: true},
            { text: "c", correct: false},
            { text: "d", correct: false},
            { text: "e", correct: false},
        ]
    },
    {
        question: "Which of these is mafalde?",
        answers: [
            { text: "a", correct: false},
            { text: "b", correct: true},
            { text: "c", correct: false},
            { text: "d", correct: false},
            { text: "e", correct: false},
        ]
    },
    {
        question: "What is cornish yarg wrapped in?",
        answers: [
            { text: "a", correct: false},
            { text: "b", correct: true},
            { text: "c", correct: false},
            { text: "d", correct: false},
            { text: "e", correct: false},
        ]
    }, 
    {
        question: "Which one of these cut’s of meat is named ‘tomahawk’?",
        answers: [
            { text: "a", correct: false},
            { text: "b", correct: true},
            { text: "c", correct: false},
            { text: "d", correct: false},
            { text: "e", correct: false},
        ]
    },
    {
        question: "Which one of these flowers does saffron come from?",
        answers: [
            { text: "a", correct: false},
            { text: "b", correct: true},
            { text: "c", correct: false},
            { text: "d", correct: false},
            { text: "e", correct: false},
        ]
    },
   
    {
        question: "Which bean is miso made from?",
        answers: [
            { text: "a", correct: false},
            { text: "b", correct: true},
            { text: "c", correct: false},
            { text: "d", correct: false},
            { text: "e", correct: false},
        ]
    },
    {
        question: "Which of these is a ‘tuber’?",
        answers: [
            { text: "a", correct: false},
            { text: "b", correct: true},
            { text: "c", correct: false},
            { text: "d", correct: false},
            { text: "e", correct: false},
        ]
    },
    {
        question: "Which of these is a langoustine?",
        answers: [
            { text: "a", correct: false},
            { text: "b", correct: true},
            { text: "c", correct: false},
            { text: "d", correct: false},
            { text: "e", correct: false},
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'you scored ${score} out of ${questions.length}!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();


