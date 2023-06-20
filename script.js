let btns = $(".btn");

let btnArray = ["red", "blue", "green", "yellow"];
let started = false;
let level = 0;
let gamePattern = [];
let userPattern = [];

$(document).on("keypress", function () {
  if (!started) {
    started = true;
    startlevel();
    $("h1").text("Level: " + level);
  }
});

btns.on("click", function () {
  let btnClicked = $(this);
  let btnName = btnClicked.attr("id");
  playSound(btnName);
  animateButton(btnName);
  userPattern.push(btnName);

  checkAnswer(userPattern.length - 1);
});

// RANDOM NUMBER GENERATOR
function randomNumGenerator(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}

function playSound(btnName) {
  let audio = new Audio("sounds/" + btnName + ".mp3");
  audio.play();
}

function animateButton(btnName) {
  let btnClass = $("." + btnName);
  btnClass.addClass("btnAction");
  setTimeout(function () {
    btnClass.removeClass("btnAction");
  }, 300);
}

function startlevel() {
  userPattern = [];
  level++;
  $("h1").text("Level: " + level);
  let randomNum = randomNumGenerator(1, 4);
  let randomColor = btnArray[randomNum];
  gamePattern.push(randomColor);
  animateButton(randomColor);
  playSound(randomColor);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    if (gamePattern.length === userPattern.length) {
      setTimeout(function () {
        startlevel();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over");
    $("h1").text("Game Over");
    setTimeout(function () {
      $("body").removeClass("game-over");
      gameOver();
    }, 1000);
  }
}

function gameOver() {
  userPattern = [];
  gamePattern = [];
  started = false;
  level = 0;
  $("h1").text("Press a Key to Start");
}
