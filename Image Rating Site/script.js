const ratings = document.getElementById("ratings");
const stars = document.getElementsByClassName("star");
const next = document.getElementById("next");

next.onclick = () => {
  location.reload();
};

for (var i = 0; i < stars.length; i++) {
  stars[i].starValue = i + 1;
  ["click", "mouseover", "mouseout"].forEach(function (e) {
    stars[i].addEventListener(e, showRatings);
  });
}

function showRatings(e) {
  let starValue = this.starValue;
  let type = e.type;

  if (type === "click") {
    if (starValue === 1) {
      ratings.innerText = `You rated this picture ${starValue} star`;
    } else {
      ratings.innerText = `You rated this picture ${starValue} stars`;
    }
  }

  for (var i = 0; i < stars.length; i++) {
    if (type === "click") {
      if (i < starValue) {
        stars[i].classList.add("orange");
      } else {
        stars[i].classList.remove("orange");
      }
    }

    if (type === "mouseover") {
      if (i < starValue) {
        stars[i].classList.add("yellow");
      } else {
        stars[i].classList.remove("yellow");
      }
    }

    if (type === "mouseout") {
      stars[i].classList.remove("yellow");
    }
  }
}
