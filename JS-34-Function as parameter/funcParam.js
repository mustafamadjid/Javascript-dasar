function sayHello(name) {
  document.writeln(`<p>Hello ${name}<p>`);
}

const say = sayHello;

say("Nudirul");

function giveName(callback) {
  callback("Kanedi"); // sayHello("Kanedi")
}

giveName(say);
