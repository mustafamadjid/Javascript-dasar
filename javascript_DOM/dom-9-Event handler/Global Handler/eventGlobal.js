/*

    1. Selain menggunakan Event Target, untuk menambahkan Event Handler, kita juga bisa menggunakan Global Event Handler
    2. Global Event Handler bukanlah sebuah super class, hanya kontrak yang bisa kita gunakan untuk menambah event handler sesuai dengan type event nya


*/

let button = document.getElementById("button");

button.onclick = function () {
  let newTitle = document.createElement("h1");
  newTitle.textContent = "HI, YOU CLICKED ME";
  document.body.append(newTitle);

  button.setAttribute("value", "Clicked");
  button.style.backgroundColor = "beige";
};
