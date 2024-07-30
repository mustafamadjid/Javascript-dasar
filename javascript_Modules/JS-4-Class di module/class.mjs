/*

CLASS DI

- Selain function dan juga variable, di module juga kita bisa menambahkan class
- Secara default, class tersebut hanya bisa diakses dari dalam module nya saja, tidak bisa diluar module
- Jika kita ingin mengekspos class yang kita buat, kita juga 
bisa menggunakan kata kunci export di awal deklarasi class nya


*/

export class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.info(`Hello ${name}, my name is ${this.name}`);
  }
}
