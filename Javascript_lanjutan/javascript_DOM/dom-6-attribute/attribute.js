let image = document.getElementById("image");

let getSource = image.getAttributeNode("src");

console.info(getSource.name);
console.info(getSource.value);

// Cara langsung mendapatkan value dari attribute
console.log("\nCara Langsung");
let getSourceValue = image.getAttribute("src");
console.info(getSourceValue);

// Membuat attribut
let image2 = document.getElementById("new-image");

// cara pertama membuat attributt
// let image2_source = document.createAttribute("src");
// image2_source.value =
//   "https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png";

// image2.setAttributeNode(image2_source);

// Cara Kedua membuat attribut
image2.setAttribute(
  "src",
  "https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png"
);
