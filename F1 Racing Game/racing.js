const scorecard = document.getElementById("scorecard");
const startScreen = document.getElementById("startScreen");
const gameArea = document.getElementById("gameArea");

startScreen.onclick = () => {
  startGame();
}

let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

let player = {
  speed: 7,
  score: 0,
  start: false,
  move: 6
};

function gamePlay() {
  let car = document.getElementsByClassName("car")[0];
  let lines = document.getElementsByClassName("lines");
  let border = document.getElementsByClassName("borderLines");

  moveLines(lines);
  moveBorder(border);
  moveCars(car);

 if (player.score % 400 === 0) {
    player.speed++;
  }

  if (player.start) {
    if (keys.ArrowUp && player.fromTop > 15) {
      player.fromTop -= player.move;
    }
    if (keys.ArrowDown && player.fromTop < 656 - 70 - 15- 25) {
      player.fromTop += player.move;
    }
    
    // At a given time,either left or right (1 key) can be pressed
    if (keys.ArrowLeft && player.fromLeft > 10) {
      car.style.transform = `rotate(-13deg)`;
      player.fromLeft -= player.move;
    } else if (keys.ArrowRight && player.fromLeft < 360 - 10) {
      car.style.transform = `rotate(13deg)`;
      player.fromLeft += player.move;
    } else {
      car.style.transform = `rotate(0deg)`;
    }

    car.style.top = player.fromTop + "px";
    car.style.left = player.fromLeft + "px";

    window.requestAnimationFrame(gamePlay);
    player.score++;
    scorecard.innerText = `SCORE : ${player.score}`;
  }
}

function startGame() {
  startScreen.classList.add("hide");
  gameArea.innerHTML = "";
  player.start = true;
  window.requestAnimationFrame(gamePlay);

  for (var i = 0; i < 5; i++) {
    let roadLine = document.createElement("div");
    roadLine.classList.add("lines");
    roadLine.position = i * 150;
    roadLine.style.top = roadLine.position + "px";
    gameArea.appendChild(roadLine);
  }
  //Left Border
  for (var i = 0; i < 33; i++) {
    let borderLines = document.createElement("div");
    borderLines.classList.add("borderLines");
    borderLines.position = i * 20;
    borderLines.style.left = -195 + "px";
    borderLines.style.height = "10px";
    borderLines.style.width = "5px";
    borderLines.style.top = borderLines.position + "px";
    gameArea.appendChild(borderLines);
  }
  //Right Border
  for (var i = 0; i < 33; i++) {
    let borderLines = document.createElement("div");
    borderLines.classList.add("borderLines");
    borderLines.position = i * 20;
    borderLines.style.left = 200 + "px";
    borderLines.style.height = "10px";
    borderLines.style.width = "5px";
    borderLines.style.top = borderLines.position + "px";
    gameArea.appendChild(borderLines);
  }

  let car = document.createElement("img");
  car.setAttribute("src", "./images/blue_car.png");
  car.classList.add("car");
  gameArea.appendChild(car);

  for (var i = 0; i < 4; i++) {
    let opponentCar = document.createElement("img");
    opponentCar.setAttribute("src", randomColor());
    opponentCar.classList.add("opponentCar");
    gameArea.appendChild(opponentCar);
    opponentCar.position = i * 260 * -1;
    opponentCar.style.top = opponentCar.position + "px";
    opponentCar.style.left = Math.floor(Math.random() * 360) + "px";
  }

  player.fromLeft = car.offsetLeft;
  player.fromTop = car.offsetTop;
}

document.onkeydown = function (e) {
  e.preventDefault();
  keys[e.key] = true;
};

document.onkeyup = function (e) {
  e.preventDefault();
  keys[e.key] = false;
};

function moveLines(lines) {
  for (i = 0; i < lines.length; i++) {
    if (lines[i].position >  600) {
      lines[i].position -= 750;
    }
    lines[i].position += player.speed;
    lines[i].style.top = lines[i].position + "px";
  }
}

function moveBorder(border) {
  for (i = 0; i < border.length; i++) {
    if (border[i].position > 650) {
      border[i].position -= 659;
    }
    border[i].position += player.speed;
    border[i].style.top = border[i].position + "px";
  }
}

function moveCars(car) {
  let cars = document.getElementsByClassName("opponentCar");
  for (i = 0; i < cars.length; i++) {
    if (isCollide(car, cars[i])) {
      endGame();
    }
    if (cars[i].position > 600) {
      cars[i].position = cars[i].position- (4 * 260);
      cars[i].style.left = Math.floor(Math.random() * 360) + "px";
      cars[i].setAttribute("src", randomColor());
    }
    let random = Math.random() * (0.60 - 0.40) + 0.40;
    cars[i].position += (player.speed) * random;
    cars[i].position = Math.round(cars[i].position);
    cars[i].style.top = cars[i].position + "px";
  }
}

function randomColor() {
  const cars = [
    "./images/red_car.png",
    "./images/white_car.png",
    "./images/yellow_car.png",
    "./images/blue_car.png",
  ];

  return cars[Math.floor(Math.random() * (cars.length - 0.01))]
}

function isCollide(a, b) {
  let aRect = a.getBoundingClientRect();
  let bRect = b.getBoundingClientRect();

  return !(
    aRect.top > bRect.bottom ||
    bRect.top > aRect.bottom ||
    aRect.left > bRect.right ||
    bRect.left > aRect.right
  );
}

function endGame() {
  player.start = false;
  startScreen.classList.remove("hide");
  startScreen.innerText = `Your score is ${player.score}\nPress here to play again`;
}
