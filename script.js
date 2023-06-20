let btns = $(".btn");

let level = 1;

btns.on("click", function () {
  let btnClicked = $(this);
  btnClicked.addClass("btnAction");
  setTimeout(function () {
    btnClicked.removeClass("btnAction");
  }, 300);
});

// RANDOM NUMBER GENERATOR
function randomNumGenerator(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}
