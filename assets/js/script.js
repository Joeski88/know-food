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

    this.filename = "assets/questions.json";
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

/* add functions to determine if answers are correct */

Quiz.prototype.resetState = function() {
    this.nextButton.style.display = 'none';

    answerButtons = document.getElementById("answer-buttons")
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

Quiz.prototype.selectAnswer = function(e) {
    const selectedBtn = e.target.parentNode;
    console.log(e)
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        game.score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(game.answerButtons.children).forEach(button => {
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

    game.nextButton.style.display = 'block';
};

/* function to display score at the end of quiz and to restart quiz */
Quiz.prototype.showScore = function() {
    this.resetState();
    this.questionElement.innerHTML = `you scored ${this.score} out of ${this.randomQuizQuestions.length}!`;
    this.questionElement.innerHTML += "<br>";
    this.questionElement.innerHTML += this.checkScore();
    this.nextButton.innerHTML = "Play Again";
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

var game = null;

window.onload = function () {
    if (game == null){
        game = new Quiz();
    }
fetchJSONData();
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
};
/* Create switch statement to provide user with comment upon finishing quiz */
Quiz.prototype.checkScore = function() {
    var score = this.score;

    switch(true){
        case (score <= 3):
            console.log("low score", score)
            return "Might wanna watch some more cooking shows!!";
            break

        case (score > 3 && score <= 6):
                console.log("Mid", score)
            return "Not bad, but I'd suggest maybe actually reading the cook books instead of just looking at the pictures";
            break;

        case (score > 6 && score <= 10):
                console.log("Master Chef!", score)
            return "Damn, you are a MASTERchef!! You definitly KNOWFOOD!";
            break;
    }
};
