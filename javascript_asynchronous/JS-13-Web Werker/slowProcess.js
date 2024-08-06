function showLog(total) {
  for (let i = 0; i < total; i++) {
    console.log(i);
  }
}

document.getElementById("btn-task").onclick = function () {
  console.log("start log");
  showLog(20);
  console.log("end log");
};
