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

  var answer1 = $("input[type=radio][name=question1]:checked").val();
  if (answer1 === "Brazil") {
    correctAnswers++;
  } else if (answer1 === "Argentina" || answer1 === "Mexico") {
    incorrectAnswers++;
    var textCorrectAnswer = $("<p>");
    textCorrectAnswer.text("Q1 CORRECT ANSWER: The largest coffee growing country in the world: BRAZIL");
    $("#display-correct-answer").append(textCorrectAnswer);
  } else {
    noAnswer++;
    var textCorrectAnswer = $("<p>");
    textCorrectAnswer.text("Q1 CORRECT ANSWER: The largest coffee growing country in the world: BRAZIL");
    $("#display-correct-answer").append(textCorrectAnswer);
  }

  var answer2 = $("input[type=radio][name=question2]:checked").val();
  if (answer2 === "Canada") {
    correctAnswers++;
  } else if (answer2 === "United States of America" || answer2 === "Russia") {
    incorrectAnswers++;
    var textCorrectAnswer2 = $("<p>");
    textCorrectAnswer2.text("Q2 CORRECT ANSWER: The country ranks second in terms of land area in the world: CANADA");
    $("#display-correct-answer").append(textCorrectAnswer2);
  } else {
    noAnswer++;
    var textCorrectAnswer2 = $("<p>");
    textCorrectAnswer2.text("Q2 CORRECT ANSWER: The country ranks second in terms of land area in the world: CANADA");
    $("#display-correct-answer").append(textCorrectAnswer2);
  }

  var answer3o1 = $("input[type=checkbox][name=question3-1]:checked").val();
  var answer3o2 = $("input[type=checkbox][name=question3-2]:checked").val();
  var answer3o3 = $("input[type=checkbox][name=question3-3]:checked").val();

  if (answer3o1 && answer3o3 && !answer3o2) {
    correctAnswers++;
  } else if (!answer3o1 && !answer3o2 && !answer3o3) {
    noAnswer++;
    var textCorrectAnswer3 = $("<p>");
    textCorrectAnswer3.text("Q3 CORRECT ANSWER: The countries have the largest production of manganese in the world: CHINA and SOUTH AFRICA");
    $("#display-correct-answer").append(textCorrectAnswer3);
  } else {
    incorrectAnswers++;
    var textCorrectAnswer3 = $("<p>");
    textCorrectAnswer3.text("Q3 CORRECT ANSWER: The countries have the largest production of manganese in the world: CHINA and SOUTH AFRICA");
    $("#display-correct-answer").append(textCorrectAnswer3);  }

  var answer4 = $("input[type=radio][name=question4]:checked").val();
  if (answer4 === "Malaysia") {
    correctAnswers++;
  } else if (answer4 === "Thailand" || answer4 === "Singapore") {
    incorrectAnswers++;
    var textCorrectAnswer4 = $("<p>");
    textCorrectAnswer4.text("Q4 CORRECT ANSWER: The country has the largest production of rubber in the world: MALAYSIA");
    $("#display-correct-answer").append(textCorrectAnswer4);

  } else {
    noAnswer++;
    var textCorrectAnswer4 = $("<p>");
    textCorrectAnswer4.text("Q4 CORRECT ANSWER: The country has the largest production of rubber in the world: MALAYSIA");
    $("#display-correct-answer").append(textCorrectAnswer4);
  }

  var answer5 = $("input[type=radio][name=question5]:checked").val();
  if (answer5 === "Japan") {
    correctAnswers++;
  } else if (answer5 === "Korea" || answer5 === "Vietnam") {
    incorrectAnswers++;
    var textCorrectAnswer5 = $("<p>");
    textCorrectAnswer5.text("Q5 CORRECT ANSWER: The country also has the name of 'the Land of Rising Sun' is: JAPAN");
    $("#display-correct-answer").append(textCorrectAnswer5);
  } else {
    noAnswer++;
    var textCorrectAnswer5 = $("<p>");
    textCorrectAnswer5.text("Q5 CORRECT ANSWER: The country also has the name of 'the Land of Rising Sun' is: JAPAN");
    $("#display-correct-answer").append(textCorrectAnswer5);
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
