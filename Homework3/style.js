var startButton = document.querySelector("#start");
var displayQuestionForm = document.querySelector("#questionForm");
var timer = document.querySelector("#timer");
var questForm = document.querySelector("#questForm");
var secondsLeft = 30;
/*

var correctAnswers = "?";
*/
//var questionsArrOfObjIndex = 0;

var questionsIndex = [
  {
    questionArr: ["What is your name?", "Mark", "Nick", "Tom", "Mike"],
    correctAnswer: [1],
  }
]

/*for (var i = 0; i < questionsIndex.length; i++) {
  questForm.children[i].textContent = questionsIndex[i].questionArr[i];
*/

questForm.children[0].textContent = questionsIndex[0].questionArr[0];

  questForm.addEventListener("click", function() {
    if (event.target.matches("button")) {
    var userInput = parseInt(event.target.value);
    }
   
    if (userInput == questionsIndex[0].correctAnswer){
      console.log("yay");
      }
    else {
      secondsLeft = (secondsLeft - 10);
    }
  });


startButton.addEventListener("click", begin)
 function begin(){
   if(event.target.matches("button")){
     startButton.setAttribute("style", "display:none");
     displayQuestionForm.setAttribute("style", "display:block");
     timer.textContent = "You have " + secondsLeft + " seconds remaining";
    

      function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timer.textContent = "You have " + secondsLeft + " seconds remaining";

          if(secondsLeft <= 0) {
          clearInterval(timerInterval);
          displayQuestionForm.setAttribute("style", "display:none");
          alert("Your Final Score is" + /*correctAnswers*/ "");
          var userInitials = prompt("What are your initials?");
          window.location.href = "highscore.html";
          }
        }, 1000);
      }
    }
    setTime (); 
  }
 



