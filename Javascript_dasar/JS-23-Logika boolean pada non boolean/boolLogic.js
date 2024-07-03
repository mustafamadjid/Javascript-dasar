// Operator OR di non boolean
// Membaca dari kiri ke kanan
// Operator akan mengambil nilai pertama dariu truthy
// Jika tidak ada satupun yang bernilai truthy maka yang terakhir yang akan diambil

console.info("Hello" || "");
console.info("" || []);
console.info("NOl" || 0);
console.info(0 || "NULLy");
console.info(0 || false);

var person = {
  firstName: "Mustafa",
  lastName: "Madjid",
};

let name = person.firstName || person.lastName;
console.info(name);

// Operator AND
// Mengambil nilai pertama yang falsy
// Jika tidak ada satupun yang bernilai falsy, maka yang terakhir yang akan diambil

console.info("Hello" && "");
console.info("" && []);
console.info("NOl" && 0);
console.info(0 && "NULLy");
console.info(0 && false);

console.info("Halo" && "Bandung");
