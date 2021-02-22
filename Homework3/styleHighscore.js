var listItems = document.querySelector("#listItems");
var highScores = [];
var k = 0;

function highScoresLocal() {
  for (var m = 30; m > 0; m--) {
    var scoresItem =  localStorage.getItem("highscore" + "" + m +"");
    if (scoresItem != null) {
    highScores.push(scoresItem, JSON.stringify(m));
    }
  }
  for (var j = 0; j <3; j++) {
    listItems.children[j].textContent = highScores[k] + " " + highScores[k+1]+ " points";
    k = k+2
  }
}

highScoresLocal();