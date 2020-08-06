var startButton = document.querySelector("#start");
var displayQuestionForm = document.querySelector("#QuestionForm");



startButton.addEventListener("click", begin)
 function begin(){
     if(event.target.matches("button")){
        startButton.setAttribute("style", "display:none");
        displayQuestionForm.setAttribute("style", "display:block");
    
     }
 }