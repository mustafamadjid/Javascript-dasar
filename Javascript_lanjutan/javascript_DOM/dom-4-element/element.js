// Semua property dan method dalam Node bisa digunakan oleh element
// karena element adalah turunan dari node

const title = document.getElementById("title");
title.textContent = "Belajar DOM aja nih";

const desc = document.getElementById("description");
desc.textContent = "Selamat Belajar";

// Element property
let content = document.getElementById("content");
console.log(content.id);
console.log(content.className);
console.log(content.tagName);
