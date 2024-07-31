import sayHelloDefault from "./export-default.mjs"; // nama bebas aja tidak harus sayHelloDefault
import personName from "./export-default-variable.mjs";
import { default as Person } from "./export-default-class.mjs";

sayHelloDefault("Rudian");
console.info(personName);

const person = new Person("Fahrizal");
person.sayHi();
