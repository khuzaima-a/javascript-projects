var alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var movies = [
  "jaws",
  "avatar",
  "titanic",
  "aladdin",
  "joker",
  "alien",
  "wrongturn",
  "pk",
  "rocky",
  "thor",
  "raazi",
  "tashan",
  "war",
  "dhoom",
  "don",
  "race",
  "singham",
  "lagaan",
  "raabta",
  'oppenheimer',
  'inception',
  'barbie',
  'joker',
];

var alphabetSpace = document.getElementById("alphabet");
var livesSpace = document.getElementById("lives");
var livesContainer = document.getElementById("livesContainer");
var guessSpace = document.getElementById("guessContainer");
var messageSpace = document.getElementById("message");
var keyButtons = document.getElementsByClassName("button");
var keySpace = document.getElementsByClassName("pClass");
var correctMovie = document.getElementById("correctMovie");
var mainHeading2 = document.getElementById("mainHeading2");
var lives = 10;

init();

function init() {
  var ul = document.createElement("ul");
  alphabetSpace.appendChild(ul);
  ul.classList.add("alphabetList");
  for (var i = 0; i < alphabets.length; i++) {
    var button = document.createElement("button");
    button.innerText = alphabets[i];
    button.classList.add("button");
    ul.appendChild(button);
  }

  livesSpace.innerText = lives;
  var guessMovie = randomMovie();

  for (var i = 0; i < guessMovie.length; i++) {
    var p = document.createElement("p");
    p.classList.add("pClass");
    p.style.display = "inline";
    p.style.marginRight = "20px";
    p.style.fontSize = "50px";
    p.innerText = "-";
    guessSpace.appendChild(p);
  }
  var replayBtn = document.createElement("button");
  replayBtn.classList.add("replayButton");
  replayBtn.innerText = "Replay Game";
  replayBtn.onclick = function () {
    location.reload();
  };

  for (button of keyButtons) {
    button.onclick = function (e) {
      var key = e.target.innerText;
      e.target.disabled = true;
      e.target.style.backgroundColor = "darkgray";
      if (guessMovie.includes(key)) {
        for (var i = 0; i < guessMovie.length; i++) {
          if (key == guessMovie[i]) {
            keySpace[i].innerText = key;
          }
        }
        var count = 0;
        for (var i = 0; i < guessMovie.length; i++) {
          if (keySpace[i].innerText !== "-") {
            count++;
          }
        }
        if (count === guessMovie.length) {
          messageSpace.innerText = "You won!";
          messageSpace.appendChild(replayBtn);
          livesContainer.style.display = "none";
          alphabetSpace.style.display = "none";
          guessSpace.style.display = "none";
          mainHeading2.style.display = "none";
        }
      } else {
        livesSpace.innerText--;
        if (livesSpace.innerText == 0) {
          messageSpace.innerText = "You Lost it.";
          correctMovie.innerText = 'The movie was "' + guessMovie + '"';
          messageSpace.appendChild(replayBtn);
          livesContainer.style.display = "none";
          mainHeading2.style.display = "none";
          alphabetSpace.style.display = "none";
          guessSpace.style.display = "none";
        }
      }
    };
  }
}

function randomMovie() {
  var i = Math.floor(Math.random() * movies.length);
  return movies[i];
}
