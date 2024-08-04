function doRegister() {
  const ajax = new XMLHttpRequest();

  ajax.open(
    "POST",
    "https://01j4egdrbbpkdtzg9htmscfe1d00-e85d314d05dc33f79120.requestinspector.com"
  );
  ajax.onload = function () {
    const response = document.getElementById("response");
    response.innerHTML = ajax.responseText;
  };

  const form = new FormData();
  form.append("username", document.getElementById("username").value);
  form.append("name", document.getElementById("name").value);

  const files = document.getElementById("profile").files;
  const firstFile = files.item(0);

  form.append("profile", firstFile);

  ajax.send(form);
}

document.getElementById("register").onclick = doRegister;
