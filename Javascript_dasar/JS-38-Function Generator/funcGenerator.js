/* 

  Function Generator -> function untuk membuat data generator

  Generator adalah data yang bisa di iterasi seperti array

  Generator bersifat lazy

*/

function* createNames() {
  yield "Heli";
  yield "Sudarman";
  yield "Munir";
}

const names = createNames();

document.writeln(createNames());

for (item of names) {
  document.writeln(`<p> ${item} </p>`);
}
