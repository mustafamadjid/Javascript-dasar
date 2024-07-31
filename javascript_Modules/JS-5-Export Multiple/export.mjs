/*

EXPORT MULTIPLE

- Sebelumnya kita selalu menggunakan kata kunci export diawal variable, function atau class
- Sebenarnya kita bisa menggunakan export sekaligus beberapa data sekaligus, caranya cukup gunakan perintah :
  export { variable, function, class, danLainLain }



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

export { Person, company, sum };
