/*

AGREGATING MODULES
- Ada waktunya kadang kita ingin meng agregate beberapa module menjadi satu agar p
  enggunaannya lebih sederhana
- Jika module sudah banyak, maka ketika butuh banyak kode dari banyak module, 
  kita harus sebutkan nama module tersebut tiap kalo import
- Dengan melakukan aggregate, kita bisa membuat module aggregate,
  yang isinya menggabungkan export dari module lain
- Caranya sangat mudah, cukup gunakan perintah :
  export {a, b, c} from “./module.js”


*/

export { Person } from "../JS-4-Class di module/class.mjs";
export { sayHello, sayGoodbye } from "../JS-2-Membuat Module/say.mjs";
export { sum } from "../JS-5-Export Multiple/export.mjs";
