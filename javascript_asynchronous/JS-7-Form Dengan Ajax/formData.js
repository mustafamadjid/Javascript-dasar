function doLogin() {
  const ajax = new XMLHttpRequest();

  ajax.open(
    "POST",
    "https://01j4b1vgsw7vpk1804drsehsv000-d501d2caf29eeedc36b4.requestinspector.com"
  );
  ajax.onload = function () {
    const response = document.getElementById("response");
    response.innerHTML = ajax.responseText;
  };

  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  const form = new URLSearchParams();
  form.append("username", document.getElementById("username").value);
  form.append("password", document.getElementById("password").value);

  ajax.send(form);
}

document.getElementById("login").onclick = doLogin;
