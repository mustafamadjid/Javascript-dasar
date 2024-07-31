/*

ALIAS 
- Saat kita membuat aplikasi JavaScript, semakin lama kemungkinan module akan semakin banyak
- Dan bisa saja akan ada nama variable atau nama function atau nama class yang sama antar module
- Hal ini akan menyulitkan ketika ada module yang menggunakan beberapa module, 
namun ternyata variable, function atau class nya memiliki nama yang sama
- Untungnya, module memiliki fitur alias, dimana kita bisa mengubah nama variable, 
function atau class nya

ALIAS DI EXPORT
- Kita dapat menggunakan alias ketika melakukan export di module
- Caranya menggunakan kata kunci as, lalu diikuti dengan nama alias :
- export { variable as variableLain, function as functionLain, Class as ClassLain }


TIDAK DI REKOMENDASIKAN

*/

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.info(`Hello ${name}, my name is ${this.name}`);
  }
}

function sum(first, second) {
  return first + second;
}

let company = "Tokopedia";

export { Person as human, company as perusahaan, sum as total };
