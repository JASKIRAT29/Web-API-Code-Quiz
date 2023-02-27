let timerElement = document.getElementById("timer");
var btnBegin = document.querySelector("#startTime");
var initialPageEl = document.querySelector("#intialPage")
var newQuestionSpace = document.querySelector("#newQuestionSpace");
var wrapper = document.querySelector("#wrapper");


var questionIndex = 0;
var timerCount = 90;



let score = 0;
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
        options: ["<ul>", "<ol>", "<li>", "<i>"],
        result: "<ul>",
    },
    {
        question: " Which of the following tag is used to define options in a drop-down selection list?",
        options: ["<select>", "<list>", "<dropdown>", "<option>"],
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

function loadQuestions(){
    newQuestionSpace.innerHTML = ""
    
    let currentQuestion = questions[questionIndex]
    
    let questionPara = document.createElement('p')
    questionPara.innerHTML = currentQuestion.question;

    let choicesDiv = document.createElement('div')
    for (let i = 0; i < currentQuestion.options.length; i++) {
        let paragraph = document.createElement('p')
        let choiceBtn = document.createElement('button')
        choiceBtn.innerHTML = currentQuestion.options[i];
        choiceBtn.addEventListener('click',function(event){
            event.preventDefault()
            let currentChoice = event.target.innerHTML;
            if(currentChoice === currentQuestion.result){
                score = score+10;
                questionIndex = questionIndex+1;
                loadQuestions()
            }else{
                timerCount =timerCount-5;
                questionIndex = questionIndex+1;
                loadQuestions()
            }

        })
        paragraph.append(choiceBtn)
        choicesDiv.append(paragraph)
    }
    newQuestionSpace.append(questionPara, choicesDiv)
}
// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
   var timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = "Time Left - "+ timerCount;
      if (timerCount <=0) {
          // Clears interval and stops timer
          clearInterval(timer);
          alert(" **** TIMES UP !! ****")
        }
      },1000);
    };




// Event Listeners/Begin
btnBegin.addEventListener('click', function(){
    startTimer()
    startQuiz()
});

// function loadScore() {
//     // Sets timer
//     timer = JSON.parse(localStorage.getItem("timer"));
      
//       if (timerCount === 0) {
//           timerCount =[];
//       } else {
//       var timer = timer.sort();
//       for (var i=0; i< displaytimer.length; i++) {
//        var ranking = document.createElement("li");
//        scoreList.appendChild(ranking);
//        ranking.textContent = displaytimer[i];
//         // Clears interval
//         //clearInterval(timer);
//       }
//     };
//   };

// // Event Listeners/Modal Button/States
// function btnModalEventListener() {
//     btnModalButton.addEventListener('click', function(event) {
//     if (buttonState === 'Next') {
//         scoreQuestion();
//     } else if (buttonState === 'Submit') {
//         scoreQuestion();
//         quizComplete();
//     } else if (buttonState === 'Save') {
//         event.preventDefault();
//         storeUserInitialVar();
//         closeModal();
//     } else {
//         console.log("Fix Your Buttons");
//     }
//     });
// };
// // Creates submit score
// function submitScore() {
//   document.setAttribute("hidden","true");
//   stopTimer();
//   initials.removeAttribute("hidden");
//   questionIndex.textContent= "enter your initials";
//   };
  
// Attach event listener to start button to call startGame function on click
// document.getElementById("done").addEventListener("click", function(event) {
//       event.preventDefault();
//     let userInitials = initials.value;
//     if (userInitials === "") {
//         userInitials = alert("Please input valid initials!");
//     } else {
//         initials.value = " ";
//         var userScore = userInitials.concat(": ", score);
//         leaderboard.push(userScore);
//         localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
//         var rankings = document.createElement("li");
//         rankings.textContent = userScore;
//         scoreList.appendChild(rankings);
//     }
// })

// The end function is called when the win condition is met
// function end() {
// document.getElementById("startQuestion").setAttribute("hidden","true");
// document.removeAttribute("hidden");
// questionIndex.textContent="submit score";
// initials.removeAttribute("hidden");
// pausedTimer();
// };

