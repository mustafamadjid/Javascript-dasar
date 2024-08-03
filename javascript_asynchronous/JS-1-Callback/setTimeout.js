const addElement = () => {
  const header = document.createElement("h1");
  header.textContent = "Teks ini muncul setelah 5 detik ";
  document.body.appendChild(header);
};

setTimeout(addElement, 5000);
document.writeln("Welcome Kids");
