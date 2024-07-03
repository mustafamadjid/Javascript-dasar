const content = document.getElementById("content");
console.info(content.innerHTML);
console.info(content.innerText);

let createContent = document.getElementById("content");
content.innerHTML = "<h1> This is title </h1> <p> This is paragraph </p>";
