
var countDownTimer;
var timerInterval;
var arrayOfQuestions = [];
const maxTime = 5 * 60; //time is in seconds
function setCountDownTimer() {
    countDownTimer = maxTime;
}

//when the person clicks begin button the timer starts
//start timer
let timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
    countDownTimer = countDownTimer -1;
}

//question is asked
function SetupQuestions() {
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
        answer3:null,
        correctAnswer:1
    };

    arrayOfQuestions.push(question1);
    arrayOfQuestions.push(question2);

    console.log("SetUpQuestions arrayOfQuestions: ", arrayOfQuestions)

}

function nextQuestion() {
    
    for(let i = 0; i<arrayOfQuestions.length; i++) {

    }
}

function showQuestion(questionindex) {
    let questionSection = document.getElementId('question');
    let newQuestion= document.createElement('div');
    newQuestion.id = arrayOfQuestions[questionindex].id
    newQuestion.innerText = arrayOfQuestions[questionindex].question;
    questionSection.appendChild(newQuestion);
}

//if answered correctly, show points and go to next question

//if answered incorrectly, time penalty by reducing time and go to next question
//once all question have been answered, give options
//if user chooses to save score show the scoreboard