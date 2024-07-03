/*

    1. Saat kita membuat callback function untuk Event Handler, kita juga bisa menerima data event yang memicu event itu terjadi
    2. Data Event tersebut bisa berbeda-beda, tergantung jenis Event nya, contohnya untuk Click, data event nya berupa Mouse Event (yang berisi lokasi mouse dan lain-lain)
    3. Kita bisa lihat detail dari data tiap event di halaman documentation nya :
    4. https://developer.mozilla.org/en-US/docs/Web/API/Event 

*/

let canvas = document.getElementById("canvas");
let text = document.getElementById("text");

canvas.onmousemove = function (event) {
  text.textContent = `You Click at (${event.x}),(${event.y})`;
};
