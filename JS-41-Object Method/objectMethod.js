/* 

  membuat method (function) sebagai property dalam object

*/

let person = {
  name: "Mustafa",
  sayHello: function (name) {
    alert(`Hello ${name}`);
  },
};

person.sayHello("Budiman");

//  Menambahkan method ke objek yang sudah ada

person.sayYourName = function (name) {
  alert(`Your name is ${name}`);
};

person.sayYourName("Farda");
