/*

  Limitasi dari arrow function : 
  1. Tidak memiliki fitur arguments object
  2. Tidak bisa menggunakan function generator
  3. Tidak bisa mengakses this
  4. tidak bisa mengakses super

*/

const sayHello = (name) => {
  const say = `Hello ${name}`;
  return say;
};

document.writeln(sayHello("Lily"));
document.writeln("</br>");

//  Arrow function tanpa block
let employee = (position) => document.writeln(`I Work as ${position}`);

employee("Manager");

let helloMessage = () => {
  document.writeln("Hello Message");
};

helloMessage();
