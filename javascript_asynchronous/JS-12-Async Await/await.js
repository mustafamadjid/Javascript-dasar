// Promise<JSON Product>
function getProduct() {
  return fetch("/JS-12-Async Await/API/product.json", {
    method: "GET",
  }).then((response) => response.json());
}

getProduct().then((product) => console.log(product));

// Promise<String ProductName>
async function getProductName() {
  try {
    const product = await getProduct();
    return product.name;
  } catch (error) {
    return "Product Not Found";
  } finally {
    console.log("Get Product Name Done");
  }
}

getProductName().then((name) => console.log(name));
