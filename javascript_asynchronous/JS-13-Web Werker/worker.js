addEventListener("message", function (event) {
  const data = event.data;
  for (let i = 0; i < data; i++) {
    postMessage(i);
  }
});
