const message = document.getElementById("message");
const textArea = document.getElementById("textArea");
const startBtn = document.getElementById("startBtn");
let startTime, endTime;

const lines = [
  "Ron Forbes helped her to continue with music. He spotted her potential and said",
  "Don't listen through your ears, try to sense it some other way",
  "He began by tuning two large drums to different notes",
  "You save money to party on weekends, I save it to build my empire. We are not the same bro",
  "They ask: how can I get rich without job? I say: how can you get rich with a job",
  "1% luck, 1% talent, 98% never give up, 100% success formula",
  "5 Year ago my crush said “No” When I asked her out. Today I'm on the top of her Google search list",
  "I don't wanna be in a relationship. I wanna be in Lamborghini",
  "Don't be afraid of losing people. Be afraid of losing yourself trying to please everyone else around you",
  "You killed the innocent in me, and i will never forget that",
  "When you go for something, Don't come back until you get it",
  "I just want to get rich and tell my dad that he can quit his job",
  "They laugh at me because i am different, i laugh at them because they all are same",
];

textArea.disabled = true;

function startGame() {
  message.style.background = "#6c166c";
  textArea.value = "";
  startBtn.innerText = "Done";
  textArea.disabled = false;
  textArea.focus();
  message.style.display = "block";
  message.innerText = lines[Math.floor(Math.random() * lines.length)];
  let time = new Date();
  startTime = time.getTime();
}

const wordCounter = (str) => {
  if (str.length === 0) {
    return 0;
  } else {
    return textArea.value.split(" ").length;
  }
};

const compare = (target, source) => {
  let wordsOfTarget = target.split(" ");
  let wordsOfSource = source.split(" ");
  let count = 0;

  wordsOfTarget.forEach(function (value, index) {
    if (value === wordsOfSource[index]) {
      count++;
    }
  });
  return count;
};

function endGame() {
  startBtn.innerText = "Start";
  textArea.disabled = true;
  let time = new Date();
  endTime = time.getTime();
  let totalTime = (endTime - startTime) / 1000;
  let correctWords = compare(message.innerText, textArea.value);
  let totalWords = message.innerText.split(" ").length;
  let result = "Time: " + totalTime + "s\n";
  result +=
    "WPM: " +
    Math.round((wordCounter(textArea.value) / totalTime) * 60) +
    "\n";
  result += "Total Words: " + totalWords + "\n";
  result += "Correct Words: " + correctWords + "\n";
  result += "Errors: " + (totalWords - correctWords);
  message.innerText = result;
  message.style.fontSize = "20px";
  let wpm = Math.round((wordCounter(textArea.value) / totalTime) * 60);
  if (wpm < 35) {
    message.style.background = "rgb(182 27 42)";
  } else if (wpm >= 35 && wpm < 50) {
    message.style.background = "rgb(201 91 0)";
  } else {
    message.style.background = "rgb(21 114 16)";
  }
}

startBtn.onclick = () => {
  if (startBtn.innerText === "Start") {
    startGame();
  } else {
    endGame();
  }
};

textArea.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    endGame();
  }
});
