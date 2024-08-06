function doLogin() {
  const request = new Request(
    "https://01j4egdrbbpkdtzg9htmscfe1d00-e85d314d05dc33f79120.requestinspector.com",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "text/plain",
      },
      body: JSON.stringify({
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
      }),
    }
  );

  //   Promise<Response>
  const response = fetch(request);

  response
    .then(
      (response) => (document.getElementById("response").innerHTML = response)
    )
    .catch(function (error) {
      document.getElementById("response").innerHTML = error;
    });
}

document.getElementById("login").onclick = doLogin;
