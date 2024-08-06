function getProduct(product) {
  return new Promise(function (resolve, reject) {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", `/JS-10-Promise Method/API/${product}.json`);
    ajax.onload = function () {
      if (ajax.status === 200) {
        resolve(ajax.responseText);
      } else {
        reject(`Error Get Product with response : ${ajax.status}`);
      }
    };

    ajax.send();
  });
}

const promise = Promise.all([
  getProduct("product1"),
  getProduct("product2"),
  getProduct("product3"),
]);

promise.then(function (products) {
  console.log(products);
});
