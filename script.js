var score = document.querySelector(".score");
var choices = document.querySelector(".choices");
var question = document.querySelector(".question");
var progressText = document.querySelector(".progressText");
var startButton = document.querySelector(".start-button");

var currentQuestion = {};
var answers = false;
var winCounter = 0;
var loseCounter = 0;
var question = 0;
var availableQuestion = [];
let timeE1 = document.getElementById("time");