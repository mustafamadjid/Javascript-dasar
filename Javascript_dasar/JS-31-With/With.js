/* 

  with -> fitur untuk menurunkan sebuah scope data

  dengan menggunakan with kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya

  Sudah jarang digunakan karena kadang membuat ambigu ketka terdapat nama property yang sama 
  dengan property lain atau variabel lain

*/

const person = {
  firstName: "Atha",
  middelName: "Mustafa",
  lastName: "Madjid",
};

with (person) {
  document.writeln(firstName);
  document.writeln(middelName);
  document.writeln(lastName);
}
