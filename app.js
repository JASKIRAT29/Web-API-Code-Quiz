let timerElement = document.getElementById("timer");
var btnBegin = document.querySelector("#startTime");
var initialPageEl = document.querySelector("#intialPage")
var newQuestionSpace = document.querySelector("#newQuestionSpace");
var wrapper = document.querySelector("#wrapper");
var response = document.querySelector("#response");
var score = document.querySelector("#score")
var correctOption = document.querySelector("correctOption")
var currentChoice = document.querySelector("currentChoice")
var scoreLink = document.querySelector("#scoreLink")
var questionIndex = 0;
var timerCount = 90;

var questionCount=1;
var score = 0;
// Array of words the user will guess
var questions= [
    {
        question: "What are JavaScript Data Types?",
        options: ["Number", "Alertbox", "Object", "Console"],
        result: "Number",
    },
    {
        question: " Which company developed JavaScript?",
        options: ["Google", "Microsoft", "Netscape", "Apple"],
        result: "Netscape",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["curly brackets", "parenthesis", "commas", "quotes"],
        result: "quotes",

    },
    {
        question: " The property in CSS used to change the text color of an element is :",
        options: ["bgcolor", "color", "background-color", "All of the above"],
        result: "color",
    },
    {
        question: " The HTML attribute used to define the inline styles is -",
        options: ["style", "styles", "class", "None of the above"],
        result: "style",
    },
    {
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        options: ["ul", "ol", "li", "i"],
        result: "ul",
    },
    {
        question: " Which of the following tag is used to define options in a drop-down selection list?",
        options: ["select", "list", "dropdown", "option"],
        result: "option"
    }

];
// The startGame function is called when the start button is clicked
function startQuiz() {
  // Prevents start button from being clicked when round is in progress
initialPageEl.style.display = "none"
newQuestionSpace.style.display = "block"
loadQuestions()
}
// var options = document.getElementById("options");


function loadQuestions(){
    newQuestionSpace.innerHTML = "";
    response.style.display = 'block';

    setTimeout(function () {
        response.style.display = 'none';
    }, 1000);
    let currentQuestion = questions[questionIndex]
    
    let questionPara = document.createElement('p')
    if(currentQuestion) {
        questionPara.innerHTML = currentQuestion.question;
        let choicesDiv = document.createElement('div')
        for (let i = 0; i < currentQuestion.options.length; i++) {
            let paragraph = document.createElement('p')
            const choiceBtn = document.createElement('button')
            // let answers = document.createElement('button');
            choiceBtn.id = "button1";
            choiceBtn.textContent = currentQuestion.options[i];
            choiceBtn.addEventListener('click',function(event){
                event.preventDefault()
                let currentChoice = event.target.innerHTML;
                if(currentChoice === currentQuestion.result){
                    console.log("Answer is Correct");
                    const response = document.querySelector("#response");
                    response.innerHTML = '<div id="response" style="color:greenyellow;font-size:20px;font-weight:bold;margin-left:35%"><span>Correct!</span></div>';
                    setTimeout(loadQuestions, 1000)

                 

                    score = score+10;
                    questionIndex = questionIndex+1;
                    // loadQuestions()
                }else{
                    
                    console.log("Answer is Incorrect");
                    const response = document.querySelector("#response");
                    response.innerHTML = '<div id="response" style="color:maroon;font-size:20px;font-weight:bold;margin-left:35%"><span>Wrong!</span></div>';
                  

                    setTimeout(loadQuestions,500)
                    timerCount =timerCount-5;

                    questionIndex = questionIndex+1;

                }

            })
            paragraph.append(choiceBtn)
            choicesDiv.append(paragraph)
        }
    newQuestionSpace.append(questionPara, choicesDiv)
    }
    else {
        endOfQuiz();
    }
    
}

function endOfQuiz() {
    newQuestionSpace.style.display="none";
    timerElement.style.display = "none"; 

  
    
    const quizDiv = document.createElement('div');
    quizDiv.id = "quizDiv";
document.body.append(quizDiv);
const paragraph = document.createElement('p')
paragraph.textContent ="All Done!!";
quizDiv.append(paragraph.textContent)

var scoreInput = document.createElement('h4');

scoreInput.textContent = "Your final score is :" + score ;
scoreInput.id = "scoreInput";

quizDiv.appendChild(scoreInput); 

    //div
var inputContainer = document.createElement("div");
inputContainer.id = "input-container";
quizDiv.append(inputContainer);

var label = document.createElement("label");
label.textContent = "Enter Initials:";
label.id = "label";
label.setAttribute("for", "input");
inputContainer.appendChild(label);


//input field
var inputField = document.createElement("INPUT");
inputField.id = "enter-input";
inputField.setAttribute("id", "input")
inputField.setAttribute("name", "input");
inputField.setAttribute("type", "text");
// x.setAttribute("value", "Hello World!");
inputContainer.appendChild(inputField);

//submit button
var submit = document.createElement("button");
submit.textContent = "Submit";
submit.id = "submit-button";
submit.addEventListener("click", event => {
    // retreives user input
    const setScore = document.getElementById('input').value;
    localStorage.setItem("initials",setScore);
    localStorage.setItem("score",score);
   
quizDiv.remove();
highScore();
}
);
inputContainer.appendChild(submit);



}
function highScore(){
    newQuestionSpace.style.display="none";
    timerElement.style.display = "none"; 

  
    // Score div

    const quizDiv = document.createElement('div');
    quizDiv.id = "quizDiv";
document.body.append(quizDiv);

//Heading for the highscore
const paragraph = document.createElement('h1')
paragraph.textContent ="HighScores Record";
quizDiv.append(paragraph.textContent)

//get item from the localstorage the score stored
var initials = localStorage.getItem("initials");
var score = localStorage.getItem("score");

var highScoreBoard = document.createElement('p');
highScoreBoard.textContent=  initials + " - " + score;
// highScoreBoard.textContent=score;

highScoreBoard.id ="highscore-board";

// highScoreBoard.textContent(score);
quizDiv.append(highScoreBoard);

//Goback button
var goBackButton = document.createElement("button");
goBackButton.textContent ="Go Back";
goBackButton.id ="goBack";

goBackButton.addEventListener("click", event => {
   
    window.location.replace("index.html");


}
);
quizDiv.append(goBackButton);

// clear the data when button is clicked
var clearButton = document.createElement("button");
clearButton.textContent ="Clear Score";
clearButton.id ="clear";

clearButton.addEventListener("click", event => {
   
    localStorage.removeItem("initals")
    //remove initals from local storage
    localStorage.removeItem("score")
    //remove score from leaderboard
    highScoreBoard.remove();

}
);
quizDiv.append(clearButton);
}

// The setTimer function starts and stops the timer and triggers quizQuestion()
function startTimer() {
    // Sets timer
   var timer = setInterval(function() {
      timerCount--;
    //   timerElement.textContent = "Time Left - "+ timerCount;
      timerElement.textContent = "Time left: " + timerCount + " s";

      if (timerCount <=0) {
        
          // Clears interval and stops timer
          clearInterval(timer);
        endOfQuiz();
          timerElement.textContent = "Time's up!";

        }
        else  if(questionCount >= questions.length +1) {
            clearInterval(timer);
            endOfQuiz();
            }
      },1000);

    };


// Event Listeners/Begin
btnBegin.addEventListener('click', function(){
    startTimer()
    startQuiz()
});








