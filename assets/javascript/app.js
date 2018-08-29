//Declare Variables
var gameStarted = false;
var startButton;
var formsList;
var finalAnswers;

//Game started once HTML is completely loaded
$(document).ready(function() {
  startGame();

//START button is clicked
  $("#start-button").click(function() {
    $("#start-button").hide();
    $("#form-questions").show();


//Submit button is clicked 
    $("#submit").click(function(){
        $("#form-questions").hide();
        $("#final-answer").show();

    });


  });
});

function startGame() {
  gameStarted = true;
  $("#start-button").show();
  $("#form-questions").hide();
  $("#final-answer").hide();
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
