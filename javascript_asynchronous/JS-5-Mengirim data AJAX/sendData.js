function doLogin() {
  const ajax = new XMLHttpRequest();
  ajax.open(
    "POST",
    "https://01j4b1vgsw7vpk1804drsehsv000-d501d2caf29eeedc36b4.requestinspector.com"
  );
  ajax.onload = function () {
    console.info(ajax.responseText);
  };

  ajax.setRequestHeader("Content-Type", "application/json");
  ajax.send(
    JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    })
  );
}

document.getElementById("login").onclick = doLogin;
