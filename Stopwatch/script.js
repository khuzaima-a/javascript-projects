document.addEventListener("DOMContentLoaded", () => {
  let playBtn = document.getElementById("play");
  let pauseBtn = document.getElementById("pause");
  let resetBtn = document.getElementById("reset");
  let displayTimer = document.getElementsByClassName("timer")[0];
  let flag =document.getElementById("flag");
  let down = document.getElementById('down');
  let saves = document.getElementById('saves');
  const saves_ol = document.getElementById("saves-ol");

  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  let leadingSeconds = 0;
  let leadingMinutes = 0;
  let leadingHours = 0;

  let timerStatus = "stopped";
  let timerInterval = null;

  function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
      seconds = 0;
      minutes++;

      if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
      }
    }

    if (seconds < 10) {
      leadingSeconds = "0" + seconds.toString();
    } else {
      leadingSeconds = seconds;
    }

    if (minutes < 10) {
      leadingMinutes = "0" + minutes.toString();
    } else {
      leadingMinutes = minutes;
    }

    if (hours < 10) {
      leadingHours = "0" + hours.toString();
    } else {
      leadingHours = hours;
    }

    displayTimer.innerText =
      leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
  }
  // setInterval(stopWatch, 1);
  playBtn.onclick = function () {
    timerInterval = setInterval(stopWatch, 1000);
    flag.classList.remove('hide');

    playBtn.classList.add("hide");
    pauseBtn.classList.remove("hide");
  };

  pauseBtn.onclick = function () {
    clearInterval(timerInterval);

    pauseBtn.classList.add("hide");
    playBtn.classList.remove("hide");
  };

  flag.onclick = function() {
    down.classList.remove('hide');

    // savesDiv.classList.remove('hide');
    let li = document.createElement('li');
    li.innerText = displayTimer.innerText;
    saves_ol.appendChild(li);
  }

  down.onclick = () => {
    saves.classList.toggle('hide')
  }

  resetBtn.onclick = function () {
    resetBtn.classList.add("fa-spin");
    flag.classList.add('hide')
    down.classList.add('hide');

    saves_ol.innerHTML = "";
    saves.classList.add('hide');

    setTimeout(() => {
        resetBtn.classList.remove("fa-spin");
    }, 1000);

    seconds = 0;
    minutes = 0;
    hours = 0;

    displayTimer.innerText = "00:00:00";
    if (timerInterval) {
      clearInterval(timerInterval);
      pauseBtn.classList.add("hide");
      playBtn.classList.remove("hide");
    }
  };
});
