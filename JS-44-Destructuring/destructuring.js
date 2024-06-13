// Destructuring Array
let names = ["Kamado", "Tanjiro", "fubuki", "Zenitsu", "Saitama"];

let [first, mid, last, ...others] = names;

console.info(first);
console.info(mid);
console.info(last);
console.info(others);
