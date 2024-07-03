/*

    Event Target -> merupakan parent class dari Node, artinya semua Node memiliki kemampuan dari
                    event target

*/

let button = document.getElementById("clickMe");
button.addEventListener("click", function () {
  button.setAttribute("value", "Already Clicked");
});
