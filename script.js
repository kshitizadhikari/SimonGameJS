let btns = $(".btn");

let btnArray = ["red", "blue", "green", "yellow"];
let started = false;
let level = 1;
let gamePattern = [];
let userPattern = [];

$(document).on("keypress", function () {
  if (!started) {
    $("h1").text("Level: " + level);
    startLevel(level);
    started = true;
  }
});

btns.on("click", function () {
  let btnClicked = $(this);
  let btnName = btnClicked.attr("id");
  playSound(btnName);
  animateButton(btnName);
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

function startLevel(currentLevel) {
  for (var i = 1; i <= currentLevel; i++) {
    let randomNum = randomNumGenerator(1, 4);
    let btn = btnArray[randomNum];
    playSound(btn);
    animateButton(btn);
  }
}
