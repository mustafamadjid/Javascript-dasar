import * as object from "./module-object.mjs";

console.info(object.firstName);
console.info(object.middleName);
console.info(object.lastName);

object.hello();

const person = new object.Person();
console.info(person);
