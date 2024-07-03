let text = document.getElementById("text");
let button = document.getElementById("btn");

button.onclick = function () {
  text.style.color = "aqua";
};

let canvas = document.getElementById("canvas");
let buttons = document.querySelectorAll("input");

for (let button of buttons) {
  button.onclick = function () {
    canvas.style.backgroundColor = button.getAttribute("value");
  };
}
