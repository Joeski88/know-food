//* Create function for main quiz

var Quiz = function(){

    this.initialised = false;

    this.timeSinceLastFrame = new Date().getTime();
    this.fps = 30;

    this.timeBetweenFrames = 1/this.fps;
    this.lastCalledTime = null;

    this.delta = null;

    this.time = 0;

    /*quiz questions and answers*/
    this.questions = {};

    this.questionElement = null;
    this.answerButtons = null;
    this.nextButton = null;

    this.currentQuestionIndex = 0;
    this.currentQuestionNumber = 0;

    this.score = 0;
    this.randomQuizQuestions = [];

    this.filename = "./assets/questions.json";
};

 /* functions to start quiz, add next button and display next questions*/

 function startQuiz() {
     currentQuestionIndex = 0;
     score = 0;
     nextButton.innerHTML = "Next";
     randomQuizQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
     showQuestion();
 }

 function showQuestion() {
     resetState();
     let currentQuestion = randomQuizQuestions[currentQuestionIndex];
     let questionNo = currentQuestionIndex + 1;
     questionElement.innerHTML = questionNo + "." + currentQuestion.question;

     currentQuestion.answers.forEach(answer => {
         const button = document.createElement("button");
         if (answer.correct) {
             button.dataset.correct = answer.correct;
         }
         const buttonImage = document.createElement("img");
         buttonImage.src = answer.image;
         buttonImage.alt = 'food';
         buttonImage.classList.add("answerImg");
         button.classList.add("btn");
         button.appendChild(buttonImage);
         const buttonText = document.createElement('span');
         buttonText.classList.add('text-answer');
         buttonText.textContent = answer.text;
         button.appendChild(buttonText);
         answerButtons.appendChild(button);
         buttonText.style.display = 'none';

         button.addEventListener("click", selectAnswer);
     });
 }

 /* add functions to determine if answers are correct*/

 function resetState() {
     nextButton.classList.add("hide") /*.style.display = "none";*/
     while (answerButtons.firstChild) {
         answerButtons.removeChild(answerButtons.firstChild);
     }
 }

 function selectAnswer(e) {
     const selectedBtn = e.target
     console.log(selectedBtn)
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

     const textAnswers = document.getElementsByClassName('text-answer');

     for (let index = 0; index < textAnswers.length; index++) {
         console.log(textAnswers[index].innerHTML);
         textAnswers[index].style.display = 'block';
     }
     nextButton.classList.remove("hide") /*.style.display = 'block';*/
     nextButton.classList.add("unhide")
 }

 /* function to display score at the end and button to start quiz again*/

 function showScore() {
     resetState();
     questionElement.innerHTML = `you scored ${score} out of ${randomQuizQuestions.length}!`;
     nextButton.innerHTML = "Play Again";
     nextButton.style.display = "block";
 }

 function handleNextButton() {
     currentQuestionNumber++;

     /*document.getElementById("answer-buttons").classList.remove("incorrect");*/

     currentQuestionIndex++;
     if (currentQuestionIndex < 10) {
         showQuestion();
     } else {
         showScore();
     }
 }


 document.addEventListener("DOMContentLoaded", function () {
     // Your code here
     const nextButton = document.getElementById("next-btn");

     // Add event listener to nextButton
     nextButton.addEventListener("click", () => {
         if (currentQuestionIndex < randomQuizQuestions.length) {
             handleNextButton();
         } else {
             startQuiz();
         }
     });

     // Call startQuiz to initialize the quiz
     startQuiz();
 });