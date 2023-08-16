let screen = document.getElementById("screen");
let buttons = document.getElementsByTagName("button");
let buttonText;
for (button of buttons) {
  button.onclick = function (e) {
    buttonText = e.target.innerText;

    if (buttonText === "C") {
      screen.value = "";
    } else if (buttonText === "x") {
      buttonText = "*";
      screen.value += buttonText;
    } else if (buttonText === "=") {
      if (screen.value !== "Error") {
        try {
          screen.value = eval(screen.value);
        } catch (error) {
          screen.value = "Error";
        }
      }
    } else if (buttonText === "%") {
      screen.value = eval(screen.value) * 100;
    } else {
      screen.value += buttonText;
    }
  };
}
