const worker = new Worker("worker.js");
worker.addEventListener("message", function (message) {
  console.log(message.data);
});

document.getElementById("btn-task").onclick = function () {
  worker.postMessage(10000000000);
};
