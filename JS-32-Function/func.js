// Create a function without parameter
function sayHello() {
  document.writeln("Hello World");
}

// Create a function with parameter
function sayName(firstName, lastName) {
  document.writeln(`Hello ${firstName} ${lastName}`);
}

// Create a function with parameter and return value
function sayCity(city) {
  const say = `Welcome to ${city}`;
  return say;
}

/* 
  Dalam javascript secara default, parameter dalam function adalah optional
*/

// Function with optional parameter
function sayIt(firstName, middleName, lastName) {
  document.writeln(`${firstName} ${middleName} ${lastName}`);
}

//Default parameter
function register(name, gender = "Unknown") {
  document.writeln(name);
  document.writeln(gender);
}

// Call the function
sayHello();
document.writeln("</br>");

sayName("Mustafa", "Madjid");
document.writeln("</br>");

document.writeln(sayCity("Jakarta"));
document.writeln("</br>");

sayIt("Nuril");

document.writeln("</br>");
document.writeln("</br>");

register("Aliman");
