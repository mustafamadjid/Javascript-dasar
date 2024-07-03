/*

  Text Node adalah text tanpa tag

*/

let text = document.body.firstChild;
console.info(text.wholeText);

let createText = document.createTextNode("Ini Buat Text Node Baru");
document.body.appendChild(createText);
