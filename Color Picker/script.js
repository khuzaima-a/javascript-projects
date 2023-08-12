let squares = document.getElementsByClassName("square");
let sqauresContainer = document.getElementById("squares");
let colorPicker = document.getElementById("colorPicker");
let container = document.getElementById("container");
let lives = document.getElementById("lives");
let score = document.getElementById("score");
let livesRemaining = 2;

init();

function init() {
  lives.innerText = livesRemaining;
  colorPicker.innerText = generateColor();
  correctColor = colorPicker.innerText;
  sqauresContainer.style.borderLeft = "none";
  sqauresContainer.style.borderRight = "none";
  sqauresContainer.style.borderTop = "none";
  sqauresContainer.style.borderBottom = "none";
  let i = paintSquares(correctColor);

  for (let square of squares) {
    square.onclick = function (e) {
      clickedColor = e.target.style.background.toUpperCase();

      if (clickedColor === correctColor) {
        sqauresContainer.style.border = "none";
        sqauresContainer.style.border = "5px solid green";

        score.innerText++;
        setTimeout(init, 1000);
      } else {
        lives.innerText = lives.innerText - 1;
        if (lives.innerText == 1) {
          sqauresContainer.style.borderLeft = "5px solid red";
          sqauresContainer.style.borderRight = "5px solid red";
        } else {
          sqauresContainer.style.borderTop = "5px solid red";
          sqauresContainer.style.borderBottom = "5px solid red";
          squares[i].style.border = "7px solid white";
          score.innerText = score.innerText - 1;
          setTimeout(() => {
            squares[i].style.border = "none";
            init();
          }, 1000);
        }
      }
    };
  }
}



function generateColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function paintSquares(correctColor) {
  var random = Math.floor(Math.random() * 6);
  for (var i = 0; i < squares.length; i++) {
    if (i === random) {
      squares[i].style.background = correctColor;
    } else {
      squares[i].style.background = generateColor();
    }
  }
  return random;
}
