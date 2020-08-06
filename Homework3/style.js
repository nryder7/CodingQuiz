var startButton = document.querySelector("#start");
var displayQuestionForm = document.querySelector("#questionForm");
var timer = document.querySelector("#timer");
var secondsLeft = 60;


startButton.addEventListener("click", begin)
 function begin(){
   if(event.target.matches("button")){
     startButton.setAttribute("style", "display:none");
     displayQuestionForm.setAttribute("style", "display:block");
     timer.textContent = "You have " + secondsLeft + " seconds remaining";
     console.log(timer);

      function setTime() {
         var timerInterval = setInterval(function() {
             secondsLeft--;
             timer.textContent = "You have " + secondsLeft + " seconds remaining";

             if(secondsLeft === 0) {
             clearInterval(timerInterval);
             //GAME OVER. Need function to display score, then redirect to leaderboard
         }
       }, 1000);
     }
    }
    setTime (); 
    }
    
     