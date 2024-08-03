const ajax = new XMLHttpRequest();

ajax.open("GET", "/JS-3-Response status AJAX/API/hello.json");

function displayResponse(json) {
  const header = document.getElementById("response");
  header.textContent = json.response;
}

ajax.addEventListener("load", function () {
  if (ajax.status === 200) {
    const json = JSON.parse(ajax.responseText);
    displayResponse(json);
  } else {
    displayResponse({
      response: `Error ${ajax.status}: ${ajax.statusText}`,
    });
  }
});

ajax.send();
