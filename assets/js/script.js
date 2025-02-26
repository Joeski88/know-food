//* Create function for main quiz
var Quiz = function(){
    this.initialised = false;      // <-- use this so we only add the event listener once

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
    this.score = 0;
    this.randomQuizQuestions = [];

    this.filename = "assets/questions.json";
};

/* added new function to call json data */
Quiz.prototype.randomiseQuestions = function(json_data){
    //convert data to list
    var result = [];
    for(var i in json_data) {
        result.push([json_data [i]]);
    }
    // randomize and slice top 10
    result = result.sort(() => 0.5 - Math.random()).slice(0,10);
    return result;
};

/* function to start quiz*/
Quiz.prototype.startQuiz = function(json_data) {
    // Setup the game each time startQuiz is called
    this.currentQuestionIndex = 0;
    this.questions = json_data;
    this.score = 0;

    // Get Next Button
    this.nextButton = document.getElementById("next-btn");
    this.nextButton.innerHTML = "Next";

    // IMPORTANT: this fixed the issue with the question number increasing by 2 after the first round.
    //  only add the event listener once:
    if (!this.initialised) {
        this.initialised = true;  // guard so we don't add listener again
        this.nextButton.addEventListener("click", () => {
            if (this.currentQuestionIndex < this.randomQuizQuestions.length) {
                // Just handle the next question
                this.handleNextButton();
            } else {
                // Otherwise we can restart quiz
                this.startQuiz(json_data);
            }
        });
    }

    // Randomize questions and display
    this.randomQuizQuestions = this.randomiseQuestions(this.questions);
    this.showQuestion();
};

Quiz.prototype.showQuestion = function() {
    this.resetState();
    // pick question
    this.currentQuestion = this.randomQuizQuestions[this.currentQuestionIndex][0];

    var questionNo = this.currentQuestionIndex + 1;
    this.questionElement = document.getElementById("question");
    this.questionElement.innerHTML = questionNo + ". " + this.currentQuestion.question;

    this.currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        var buttonImage = document.createElement("img");
        buttonImage.src = 'https://joeski88.github.io/know-food/' + answer.image;
        buttonImage.alt = 'food';
        buttonImage.classList.add("answerImg");
        button.classList.add("btn");

        button.appendChild(buttonImage);

        const buttonText = document.createElement('span');
        buttonText.classList.add('text-answer');
        buttonText.textContent = answer.text;
        buttonText.style.display = 'none';
        button.appendChild(buttonText);

        this.answerButtons = document.getElementById("answer-buttons");
        this.answerButtons.appendChild(button);

        // NOTE: Use arrow function so "this" remains to be our Quiz instance
        button.addEventListener("click", (e) => this.selectAnswer(e));
    });
};

/* add functions to determine if answers are correct */
Quiz.prototype.resetState = function() {
    this.nextButton.style.display = 'none';

    let answerButtons = document.getElementById("answer-buttons");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
};

Quiz.prototype.selectAnswer = function(e) {
    let selectedBtn = e.target;

    // If the clicked element is an image, get the parent button
    if (selectedBtn.tagName === "IMG" ) {
        selectedBtn = selectedBtn.parentElement;
    }

    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        this.score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(this.answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    const textAnswers = document.getElementsByClassName('text-answer');
    for (let index = 0; index < textAnswers.length; index++) {
        textAnswers[index].style.display = 'block';
    }

    this.nextButton.style.display = 'block';
};

/* function to display score at the end of quiz and to restart quiz */
Quiz.prototype.showScore = function() {
    this.resetState();
    this.questionElement.innerHTML = `YOU SCORED ${this.score} OUT OF ${this.randomQuizQuestions.length}!`;
    this.questionElement.innerHTML += "<br>";
    this.questionElement.innerHTML += this.checkScore();
    this.nextButton.innerHTML = "Play Again?";
    this.nextButton.style.display = "block";
};

Quiz.prototype.handleNextButton = function() {
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < 10) {
        this.showQuestion();
    } else {
        this.showScore();
    }
};

/*define function to pull json data*/
function fetchJSONData() {
    fetch('assets/questions.json')
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => game.startQuiz(data))
        .catch((error) => console.error("Unable to fetch data:", error));
}

/* Create switch statement to provide user with comment upon finishing quiz */
Quiz.prototype.checkScore = function() {
    var score = this.score;

    switch(true){
        case (score <= 3):
            return "Might wanna watch some more cooking shows!!";
        case (score > 3 && score <= 6):
            return "Not bad, but I'd suggest maybe actually reading the cook books instead of just looking at the pictures.";
        case (score > 6 && score <= 10):
            return "Damn, you are a MASTERchef!! You definitely KNOWFOOD!";
    }
};

var game = null;

window.onload = function () {
    if (game == null){
        game = new Quiz();
    }
    
    fetchJSONData();
};
