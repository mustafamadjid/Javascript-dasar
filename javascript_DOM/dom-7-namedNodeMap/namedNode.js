// namedNodeMap -> kumpulan dari attribut
let image = document.getElementById("image");
let attr = image.attributes;

// console.info(attr.getNamedItem("src"));

for (let attributes of attr) {
  console.log(`${attributes.name} : ${attributes.value}`);
}
