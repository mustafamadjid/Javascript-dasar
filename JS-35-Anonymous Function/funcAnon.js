/* 

  Anonymous Function -> Fungsi tanpa nama

  dapat dibuat dalam sebuah variable atau saat mengisi parameter

*/

// Di dalam variabel
let say = function (name) {
  document.writeln(`Hello ${name}`);
};

say("Fuhrer !!");
document.writeln("</br>");
document.writeln("</br>");

// Di dalam parameter function
function giveName(callback) {
  callback("Muliadi");
}

giveName(say);

giveName(function (name) {
  document.writeln(`Hallo abang ${name}`);
});
