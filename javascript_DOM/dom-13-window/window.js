let content = document.getElementById("content");
let getLocation = document.getElementById("location");

let height = window.screen.height;
let width = window.screen.width;
let url = window.location;

content.textContent = `Window widht : ${width}, height : ${height}`;
getLocation.textContent = url;
