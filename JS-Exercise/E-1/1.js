/* 
Diberikan sebuah daftar bilangan bulat positif. Buatlah program Python untuk menghitung jumlah bilangan yang habis dibagi 3 atau 5 dalam rentang 1 hingga n. Kemudian tampilkan jumlah tersebut.

Contoh Input:
n = 10

Contoh Output:
Jumlah bilangan yang habis dibagi 3 atau 5 dalam rentang 1 hingga 10 adalah 23.
*/

let input = Number(prompt("Input a number : "));

let sum = 0;
for (let i = 1; i <= input; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

document.writeln(`Result : ${sum}`);
