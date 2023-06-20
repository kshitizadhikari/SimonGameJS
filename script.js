let btns = $(".btn");

let level = 1;

btns.on("click", function () {
  let btnClicked = $(this);
  btnClicked.addClass("btnAction");
  playSound(btnClicked);
  setTimeout(function () {
    btnClicked.removeClass("btnAction");
  }, 300);
});

// RANDOM NUMBER GENERATOR
function randomNumGenerator(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}

function playSound(btnClicked) {
  let btnId = btnClicked.attr("id");

  let audio = new Audio("sounds/" + btnId + ".mp3");
  audio.play();
}
