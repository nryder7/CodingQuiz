var startButton = document.querySelector("#start");
var displayQuestionForm = document.querySelector("#questionForm");
// var listItems = document.querySelector("#listItems");
var timer = document.querySelector("#timer");
var questForm = document.querySelector("#questForm");
var secondsLeft = 30;
var j = 0;
var correctAnswers = 0;
var userInitials = "";
var highScores = [];
var letters = /^[A-Za-z]+$/;

function highScoresLocal() {
  var localCheck = localStorage.getItem("highscore" + secondsLeft);
  if (localCheck != null) {
    localStorage.setItem("highscore" + secondsLeft, localCheck + "/" + userInitials);
  }
  else {
    localStorage.setItem("highscore" + secondsLeft, userInitials);
  }
}

var questionsIndex = [
  {
    questionArr: ["14 * 4 ?", "32", "48", "56", "62"],
    correctAnswer: [3],
  },
  {
    questionArr: ["72 / 6 ?", "8", "9", "12", "14"],
    correctAnswer: [3],
  },
  {
    questionArr: ["16 * 3 - 4 ?", "42", "44", "46", "48"],
    correctAnswer: [2],
  }
]

function displayQuestion() {
  if (j < questionsIndex.length) {
    console.log(questionsIndex.length);
    for (var i = 0; i < questionsIndex[j].questionArr.length; i++) {
      questForm.children[i].textContent = questionsIndex[j].questionArr[i];
    };
  }
  else {
    alert("Your Final Score is " + secondsLeft + "");
    initials();
    secondsLeft = 0;
  }
}

questForm.addEventListener("click", function () {
  if (event.target.matches("button")) {
    var userInput = parseInt(event.target.value);
  }

  if (userInput == questionsIndex[j].correctAnswer) {
    j++;
    correctAnswers++;
    displayQuestion();
  }

  else {
    j++;
    secondsLeft = (secondsLeft - 10);
    displayQuestion();
  }
});

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "You have " + secondsLeft + " seconds remaining";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      displayQuestionForm.setAttribute("style", "display:none");
      window.location.href = "highscore.html";
    }
  }, 1000);
}

function initials() {
  userInitials = prompt("What are your initials?").trim();

  if (userInitials === "") {
    initials();
  }
  else if (userInitials.match(letters)){
    highScoresLocal();
  }
  else {
    initials();
  }
}

startButton.addEventListener("click", begin)
function begin() {
  if (event.target.matches("button")) {
    startButton.setAttribute("style", "display:none");
    displayQuestionForm.setAttribute("style", "display:block");
    timer.textContent = "You have " + secondsLeft + " seconds remaining";
    displayQuestion();
  }
  setTime();
};
