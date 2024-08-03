const setTime = () => {
  const header = document.getElementById("header");
  header.textContent = new Date().toString();

  document.body.appendChild(header);
};

document.writeln("Ini setInterval callback");
setInterval(setTime, 1000);
