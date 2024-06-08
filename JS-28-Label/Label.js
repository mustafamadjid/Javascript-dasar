/*
 Label -> Penanda yang bisa digunakan ketika ingin melakukan break dan continue 
 terhadap perulangan tertentu yang kita inginkan
 */

loopi: for (let i = 0; i < 10; i++) {
  loopj: for (let j = 0; j < 100; j++) {
    if (j > 10) {
      continue loopi;
    }
    document.writeln(`${i} - ${j}`);
    document.writeln("</br>");
  }
}
