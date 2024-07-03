console.info(document.title);

let ambil_h1 = document.getElementById("tulisan").innerHTML;

console.info(ambil_h1);

if (ambil_h1.toLowerCase() == "ini tulisan") {
  console.info("Benar");
} else {
  console.info("Salah");
}
