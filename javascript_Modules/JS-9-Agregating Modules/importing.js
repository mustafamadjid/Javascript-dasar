import { Person, sayGoodbye, sayHello, sum } from "./agregating-modules.mjs";

const person = new Person("Luminox");
person.sayHello("Joko");

sayGoodbye("Halima");
sayHello("Fahmi");

console.info(sum(5, 10));
