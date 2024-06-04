// Simillar with dictionaries in python

let person = { name: "Mustafa", year: 2004, address: "Kemiling" };

console.table(person);

document.writeln(person["year"]);

// delete data
delete person["address"];

// other way show value in string template

console.info(`Nama   : ${person.name}`);
console.info(`Tahun  : ${person.year}`);
