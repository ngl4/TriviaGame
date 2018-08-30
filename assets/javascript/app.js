//Declare Variables
var gameStarted = false;
var correctAnswers = 0;
var incorrectAnswers = 0;
var noAnswer = 0;

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var timerStart = false;
var time = 10;
var decrementTime;

//Game started once HTML is completely loaded
$(document).ready(function() {
  startGame();

  //START button is clicked
  $("#start-button").click(function() {
    $("#start-button").hide();
    $("#form-questions").show();

    if (!timerStart) {
      console.log("Timer has started!");
      start();  
    }

    //Submit button is clicked
    $("#submit").click(function() {
      $("#form-questions").hide();
      $("#final-answer").show();

      var answer1 = $("input[type=radio][name=joke]:checked").val();
      if (answer1 === "bed") {
        correctAnswers++;
      } else if (answer1 === "clock" || answer1 === "snake") {
        incorrectAnswers++;
      } else {
        noAnswer++;
      }

      var answer2 = $("input[type=radio][name=joke2]:checked").val();
      if (answer2 === "snake") {
        correctAnswers++;
      } else if (answer2 === "clock" || answer2 === "bed") {
        incorrectAnswers++;
      } else {
        noAnswer++;
      }

      var answer3 = $("input[type=checkbox][name=joke3]:checked").val();
      if (answer3 === "bed" && answer3 === "snake") {
        correctAnswers++;
      } else if (
        answer3 === "clock" ||
        answer3 === "bed" ||
        answer3 === "snake"
      ) {
        incorrectAnswers++;
      } else {
        noAnswer++;
      }
      $("#correct-answer").text(correctAnswers);
      $("#incorrect-answer").text(incorrectAnswers);
      $("#no-answer").text(noAnswer);
    });
  });
});

function startGame() {
  gameStarted = true;
  $("#start-button").show();
  $("#form-questions").hide();
  $("#final-answer").hide();
}

function count() {
  decrementTime = time--;
  $("#timers").text(decrementTime);
  
}

//Use setInterval to start the count here
function start() {
  intervalId = setInterval(count, 1000);
}

function stop() {
  clearInterval(intervalId);
}


//END GAME

//Timers get to ZERO
//the forms disappear
//the final answer page appears


//Create a "RESTART" button to allow users to replay the game
