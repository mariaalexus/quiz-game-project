//function declarations are the blueprint for how functions should be set up; functions do not execute anything.
var countDownTimer;
var timerInterval;
var arrayOfQuestions = [];
var gameScore = 0; //initializes the game score to zero 
var timePenalty = 30; //thirty seconds
const maxTime = 5 * 60; //time is in seconds
function setCountDownTimer() {
    countDownTimer = maxTime;
    console.log("countDownTimer: ", countDownTimer);
}

//when the person clicks begin button the timer starts
//start timer
function startTimer () {
    timerInterval = setInterval(updateTimer, 1000); //every second, aka every one thousand milliseconds
    console.log("startTimer: ", timerInterval);
}

function updateTimer() {
    console.log("updateTimer: begin");
    countDownTimer--; //counts down the timer by one
    console.log("updateTimer: countDownTimer", countDownTimer);
    presentTimer();
}

function presentTimer () {
    let currentTime = document.getElementById('timer');
    currentTime.innerText = countDownTimer;
    console.log("showTimer: currentTime", currentTime);
}

function showScoreBoard () {
    let scoreBoard = document.getElementById('score-board');
    console.log("showScoreBoard: scoreBoard", scoreBoard);
   // scoreBoard.classList.toggle('hide', false);
    scoreBoard.classList.remove('hide');
}

function presentScore () {
    let currentScore = document.getElementById('score');
    currentScore.innertext = gameScore;
    console.log("presentScore: currentScore", currentScore);
}

function hideGreeting() {
    let Greeting = document.getElementById('greeting');
    console.log("hideGreeting: greeting", Greeting);
   // greeting.classList.toggle('hide', false);
    greeting.classList.add('hide');
}

function doGame() {
    setCountDownTimer();
    startTimer ();
    hideGreeting ();
    showScoreBoard ();
    presentScore ();
    getQuestion ('quest0');
}

//question is asked
function SetupQuestionsAndAnswers() {
    console.log("SetUpQuestions started")
    let question1 = {
        id: "quest0",
        question: "To select elements with a specific class:",
        answer1: "write a semicolon (;) character, followed by fdasfsad",
        answer2: "write a semicolon (;) character, followed by fjsdlkjfkljfkjlkjlkjkljkljkl" ,
        answer3: "write a period (.) character",
        answer4: "write a comma (,) character",
        correctAnswer:2
    };

    let question2 = {
        id: "quest1",
        question: "In CSS, a color can be specified",
        answer1: "yes",
        answer2: "no",
        answer3: null,
        answer4: null,
        correctAnswer:1
    };

    arrayOfQuestions.push(question1);
    arrayOfQuestions.push(question2);

    console.log("SetUpQuestions arrayOfQuestions: ", arrayOfQuestions)

}

function getQuestion(questionId) {
    console.log('getQuestion questionId', questionId);

    let found = false;
    
    for(let i = 0; i<arrayOfQuestions.length; i++) {
        if(questionId == arrayOfQuestions[i].id) {
            prepareQuestionandAnswers(i); 
        }
    }
}

function prepareQuestionandAnswers(questionIndex) {
    console.log('prepareQuestionAndAnswers questionIndex', questionIndex);
    let questionSection = document.getElementId('questions');
    let newQuestion= document.createElement('div');
    newQuestion.id = arrayOfQuestions[questionIndex].id
    newQuestion.innerText = arrayOfQuestions[questionIndex].question;
    newQuestion.classList.add('question');
    newQuestion.appendChild(newQuestion);

    let qSpan = document.createElement('span');
    qSpan.innertext = arrayOfQuestions[questionIndex].question;
    newQuestion.appendChild(qSpan);


    if(arrayOfQuestions [questionIndex].answer1) {
        let answer = document.createElement('div');
        let rdoBtn = document.createElement('input');
        let label = document.createElement('label');

        rdoBtn.id = `${arrayOfQuestions[questionIndex].id}_answer1`;
        rdoBtn.setAttribute('type', 'radio');
        rdoBtn.value = 1
        rdoBtn.classList.add('answer');
        rdoBtn.classList.add('answer') = arrayOfQuestions[questionIndex].id;
        rdoBtn.name = arrayOfQuestions[questionIndex].id;

        label.innertext = arrayOfQuestions[questionIndex].answer1;
        label.setAttribute('for', `${rdoBtn.id}`);

        answer.classList.add('answer');
        answer.appendChild(rdoBtn);
        answer.appendChild(label);
        newQuestion.appendChild('answer');

        console.log('prepareQuestionAndAnswers answer', answer);


        answer.innertext = arrayOfQuestions[questionIndex].answer1;
        answer.classList.add('answer');
        answer.id = "" + arrayOfQuestions[questionIndex].id + "_answer1";
        //answer.id = `${arrayOfQuestions[questionIndex].id}_answer1`;
        newQuestion.appendChild(answer);
    }

    if(arrayOfQuestions [questionIndex].answer2) {
        let answer = document.createElement('div');
        answer.innertext = arrayOfQuestions[questionIndex].answer1;
        answer.classList.add('answer');
        answer.id = `${arrayOfQuestions[questionIndex].id}_answer2`;
        newQuestion.appendChild(answer);

    }



}

//if answered correctly, show points and go to next question

//if answered incorrectly, time penalty by reducing time and go to next question
//once all question have been answered, give options
//if user chooses to save score show the scoreboard