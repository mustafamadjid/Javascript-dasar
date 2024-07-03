// Object Type

let person = {
  firstName: "Athaullah",
  middleName: "Mustafa",
  lastName: "Madjid",
};

for (let property in person) {
  document.writeln(`<p>${property} : ${person[property]}</p>`);
}

// Array type
const cities = ["jakarta", "Bandung", "Lampung"];

for (let index in cities) {
  document.writeln(`${index} : ${cities[index]}`);
  document.writeln("</br>");
}
