//Declare Variables
var gameStarted = false;
var correctAnswers = 0;
var incorrectAnswers =0;
var noAnswer = 0;

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var timerStart = false;
var time = 30;

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
        console.log(correctAnswers);

      }else if (answer1 === "clock" || answer1 === "snake" ){
          
        incorrectAnswers++;
        console.log(incorrectAnswers);
        
      }else {

        noAnswer++;
        console.log(noAnswer);
      }
      
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
    var decrementTime = time--;
    $("#timers").text(decrementTime);
}

//Use setInterval to start the count here
function start() {
    intervalId = setInterval(count, 1000);
}

//START GAME
//Start Button

//once the start button is clicked:
//the start button disappears
//the forms appear
//the timer starts counting down from 30 seconds
//*** Appear and Disapper can be done using .hide() and .show() using JQuery;

//Forms

//all selected input in stored within variables
//define the correct answers for each questions through variables
//compare the selected input with the correct answers
//if they match, then add 1 to the correct answer
//if they are not match, add 1 to the incorrect answer
//if they are not answered, add 1 to the no answer

//END GAME

//Timers get to ZERO

//the forms disappear
//the final answer page appears

//Submit Button
//once the submit button is clicked:
//the forms disappear
//the final answer page appears

//Final Answer

//Display all the answers in HTML page
//Create a "RESTART" button to allow users to replay the game
