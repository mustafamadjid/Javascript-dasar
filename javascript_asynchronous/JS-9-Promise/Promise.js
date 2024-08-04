const promise = new Promise(function (resolve, reject) {
  const ajax = new XMLHttpRequest();
  ajax.open("GET", "http://127.0.0.1:5500/JS-9-Promise/API/product.json");
  ajax.onload = function () {
    if (ajax.status === 200) {
      resolve(ajax.responseText);
    } else {
      reject(`Error Get Product with response : ${ajax.responseText}`);
    }
  };

  ajax.send();
});

console.info(promise);
