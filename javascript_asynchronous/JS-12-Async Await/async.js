// return Promise<String>

function getNamePromise() {
  return new Promise(function (resolve, reject) {
    resolve("Mustafa Promise Manual");
  });
}
getNamePromise().then((name) => console.log(name));

// return Promise<String>
async function getNameAsync() {
  return "Mustafa Async";
}

getNameAsync().then((name) => console.log(name));
