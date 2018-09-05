//Declare Variables
var gameStarted = false;
var correctAnswers = 0;
var incorrectAnswers = 0;
var noAnswer = 0;

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var timerStart = false;
var time = 30;
var decrementTime;


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
      stop(); //Timers stop once submit button is clicked
      displayAnswers();
    });
  });
});

function startGame() {
  gameStarted = true;
  $("#start-button").show();
  $("#form-questions").hide();
  $("#final-answers").hide();
}

function decrement() {
  decrementTime = time--;
  $("#timers").text(decrementTime);

  if (time === -1) {
    stop();
    console.log("Time's Up");
    displayAnswers();
  }
}

//Use setInterval to start the count here
function start() {
  intervalId = setInterval(decrement, 1000);
}

function stop() {
  clearInterval(intervalId);
}

function displayAnswers() {
  $("#form-questions").hide();
  $("#final-answers").show();

  var answer1 = $("input[type=radio][name=joke]:checked").val();
  if (answer1 === "Brazil") {
    correctAnswers++;
  } else if (answer1 === "Argentina" || answer1 === "Mexico") {
    incorrectAnswers++;
  } else {
    noAnswer++;
  }

  var answer2 = $("input[type=radio][name=joke2]:checked").val();
  if (answer2 === "Canada") {
    correctAnswers++;
  } else if (answer2 === "United States of America" || answer2 === "Russia") {
    incorrectAnswers++;
  } else {
    noAnswer++;
  }

  var answer3o1 = $("input[type=checkbox][name=joke3-1]:checked").val();
  var answer3o2 = $("input[type=checkbox][name=joke3-2]:checked").val();
  var answer3o3 = $("input[type=checkbox][name=joke3-3]:checked").val();

  if (answer3o1 && answer3o3 && !answer3o2) {
    correctAnswers++;
  } else if (!answer3o1 && !answer3o2 && !answer3o3) {
    noAnswer++;
  } else {
    incorrectAnswers++;
  }

  var answer4 = $("input[type=radio][name=joke4]:checked").val();
  if (answer4 === "Malaysia") {
    correctAnswers++;
  } else if (answer4 === "Thailand" || answer4 === "Singapore") {
    incorrectAnswers++;
  } else {
    noAnswer++;
  }

  var answer5 = $("input[type=radio][name=joke5]:checked").val();
  if (answer5 === "Japan") {
    correctAnswers++;
  } else if (answer5 === "Korea" || answer5 === "Vietnam") {
    incorrectAnswers++;
  } else {
    noAnswer++;
  }

  $("#correct-answer")
  .text(correctAnswers)
  .addClass("text-white");
$("#incorrect-answer")
  .text(incorrectAnswers)
  .addClass("text-white");
$("#no-answer")
  .text(noAnswer)
  .addClass("text-white");
}

//Restart Button
var restartButton = $("<button>");
restartButton.text("RESTART");
restartButton.addClass("btn btn-info w-25");
$("#final-answers").append(restartButton);
restartButton.click(function() {
  location.reload();
});
