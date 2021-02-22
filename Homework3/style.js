var startButton = document.querySelector("#start");
var displayQuestionForm = document.querySelector("#questionForm");
var timer = document.querySelector("#timer");
var questForm = document.querySelector("#questForm");
var secondsLeft = 30;
var j = 0;

/*
var correctAnswers = "?";
*/
//var questionsArrOfObjIndex = 0;

var questionsIndex = [
  {
    questionArr: ["What is your name?", "Mark", "Nick", "Tom", "Mike"],
    correctAnswer: [1],
  },
  {
    questionArr: ["How old?", "11", "22", "33", "44"],
    correctAnswer: [2],
  },
  {
    questionArr: ["Favorite food?", "Pizza", "Burger", "Fries", "Cookies"],
    correctAnswer: [1],
  }
]

function displayQuestion() {
  for (var i = 0; i < questionsIndex[j].questionArr.length; i++) {
    questForm.children[i].textContent = questionsIndex[j].questionArr[i];   
  };
}





  questForm.addEventListener("click", function() {
    if (event.target.matches("button")) {
    var userInput = parseInt(event.target.value);
    }
   
    if (userInput == questionsIndex[j].correctAnswer){
      console.log("yay");
      j++;
      displayQuestion();
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
     displayQuestion();
    

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
 

