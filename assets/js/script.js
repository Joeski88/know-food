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

/* added new function to call json data */

Quiz.prototype.randomiseQuestions = function(json_data){
    //convert data to list
    var result = [];
    for(var i in json_data) {
        result.push([json_data [i]]);
    }

    console.log(result)

    result = result.sort(() => 0.5 - Math.random()).slice(0,10);
    return result
};

/* function to start quiz*/

Quiz.prototype.startQuiz = function(json_data) {
    var game = this;
    this.currentQuestionIndex = 0;
    this.questions = json_data;
    console.log("Quiz game started", json_data)

    this.score = 0;

    this.nextButton = document.getElementById("next-btn");
    this.nextButton.innerHTML = "Next";
    this.nextButton = document.getElementById("next-btn");
        console.log("Next button", game.nextButton)

        //add error check for next button
        if (game.nextButton != null){
            //add event listener to next button
            game.nextButton.addEventListener("click", () =>{
                if (game.currentQuestionIndex < game.randomQuizQuestions.length) {
                    game.currentQuestionNumber++;
                    console.log(game.currentQuestionIndex, game.randomQuizQuestions.length);
                    game.handleNextButton();    
                } else {
                    game.startQuiz(json_data);
                }
            });
        }
        this.randomQuizQuestions = this.randomiseQuestions(this.questions);
        this.showQuestion();
}

Quiz.prototype.showQuestion = function() {
    this.resetState();
    this.currentQuestion = this.randomQuizQuestions[this.currentQuestionIndex][0];

    var questionNo = this.currentQuestionIndex + 1;
    console.log("Question:", this.currentQuestion, this.currentQuestion.question, this.currentQuestion.question);
    this.questionElement = document.getElementById("question");
    this.questionElement.innerHTML = questionNo + "." + this.currentQuestion.question;

    var game= this;
    this.currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        console.log("answer", answer, answer.image);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        var buttonImage = document.createElement("img");

        console.log("answer", answer, answer.image);

        buttonImage.src = 'https://joeski88.github.io/know-food/' + answer.image;
        buttonImage.alt = 'food';

        buttonImage.classList.add("answerImg");
        button.classList.add("btn");

        button.appendChild(buttonImage);

        const buttonText = document.createElement('span');

        buttonText.classList.add('text-answer');
        buttonText.textContent = answer.text;

        button.appendChild(buttonText);

        this.answerButtons = document.getElementById("answer-buttons");
        this.answerButtons.appendChild(button);

        buttonText.style.display = 'none';

        button.addEventListener("click", this.selectAnswer);

    });
}


 /* functions to start quiz, add next button and display next questions*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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