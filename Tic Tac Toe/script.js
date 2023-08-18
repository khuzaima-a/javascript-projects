let startBtn = document.getElementById("startGame");
let parentGrid = document.getElementById("gameArea");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let loginContainer = document.getElementsByClassName("login")[0];
let gamePage = document.getElementById("container");
let boxes = document.getElementsByClassName("boxes");
let messageContainer = document.getElementById("messageContainer");

let p1name = document.getElementById("p1name");
let p2name = document.getElementById("p2name");

const p1 = {};
const p2 = {};

gamePage.style.display = "none";
messageContainer.style.display = "none";

startBtn.onclick = function () {
  if (player1.value.length === 0 || player2.value.length === 0) {
    alert("Please enter names of both the players");
  } else {
     p1.name = modifyName(player1.value.toUpperCase());
    p2.name = modifyName(player2.value.toUpperCase());

    loginContainer.style.display = "none";
    gamePage.style.display = "grid";

    p1name.innerText = p1.name;
    p2name.innerText = p2.name;

    if (Math.floor(Math.random() * 2) === 1) {
      p1.icon = "X";
      p2.icon = "O";
      turn(p1, p2);
    } else {
      p1.icon = "O";
      p2.icon = "X";
      turn(p2, p1);
    }
  }
  return false;
};

function turn(turnP, oppP) {
  console.log(turnP.name + "'s turn")
  if (turnP.name === p1name.innerText) {
    p2name.style.border = "2px solid rgb(2, 2, 40)";
    p1name.style.border = "2px solid rgb(250, 2, 184)";
  } else {
    p1name.style.border = "2px solid rgb(2, 2, 40)";
    p2name.style.border = "2px solid rgb(232,116,0)";
  }

  for (let box of boxes) {
    box.onclick = function (e) {
      let isAlreadyClicked = true;
      if (e.target.innerText === "") {
        e.target.innerText = turnP.icon;
        turnP.name === p1name.innerText
          ? (e.target.style.color = "rgb(250, 2, 184)")
          : (e.target.style.color = "rgb(232,116,0)");
        isAlreadyClicked = false;
      }

      if (isWon()) {
        gamePage.style.display = "none";
        messageContainer.style.display = "flex";
        message.innerText = turnP.name + " HAVE WON IT!!!" + "🎉";
        turnP.name === p1name.innerText ? message.classList.add('msgP1') : message.classList.add('msgP2')
      } else if (isFilled()) {
        for (box of boxes) box.innerText = "";
      } else if (isAlreadyClicked) turn(turnP, oppP);
      else turn(oppP, turnP);
    };
  }
}

function isWon() {
  const winningCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [1, 4, 7],
    [6, 7, 8],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      boxes[a].innerText === boxes[b].innerText &&
      boxes[b].innerText === boxes[c].innerText &&
      boxes[c].innerText !== ""
    ) {
      return true;
    }
  }

  return false;
}

function isFilled() {
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].innerText === "") {
      return false;
    }
  }
  return true;
}

message.onclick = function () {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerText = "";
  }
  messageContainer.style.display = "none";
  gamePage.style.display = "grid";
};

function modifyName(name) {
  while(name[name.length-1] === ' ') {
    name = name.substring(0, name.length-1)
  }
  return name
}