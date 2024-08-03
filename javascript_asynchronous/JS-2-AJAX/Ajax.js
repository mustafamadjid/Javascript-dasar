const ajax = new XMLHttpRequest();

ajax.open("GET", "http://127.0.0.1:5500/JS-2-AJAX/API/hello.json");

ajax.addEventListener("load", function () {
  const json = JSON.parse(ajax.responseText);
  const header = document.getElementById("response");
  header.textContent = json.response;
});

ajax.send();
