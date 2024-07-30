let buttonDecrease = document.getElementById("decrease");
let buttonIncrease = document.getElementById("increase");
let buttonReset = document.getElementById("reset");

let counter = document.getElementById("counter");
let counting = 0;

buttonIncrease.onclick = function () {
  counting++;
  counter.innerHTML = counting;
};

buttonReset.onclick = function () {
  counting = 0;
  counter.innerHTML = 0;
};

buttonDecrease.onclick = function () {
  counting--;
  counter.innerHTML = counting;
};
