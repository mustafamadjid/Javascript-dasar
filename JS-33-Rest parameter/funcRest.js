/* 

  Rest parameter -> fitur dimana banyak data bisa dikirim pada satu paramater dan
  terknoversi menjadi array

  1. Rest parameter hanya boleh ada satu dalam satu function
  2. Hanya boleh berada di posisi paling akhir, tidak boleh di depan atau di tengah
  3. Bahasa lain adalah variable argument

*/

function sum(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }

  document.writeln(`<p>Total ${name} is ${total}</p>`);
}

sum("Orange", 1, 2, 3, 4, 5);
//----------------------------------------

// Spread Syntax
// Mengirim array sebagai argumen function
let values = [10, 10, 10, 10];
sum("Test", ...values);
