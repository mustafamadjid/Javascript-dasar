// Closure -> membuat sebuah function di local scope dan referensi ke data sekitar local scope tersebut

function createAdder(value) {
  let owner = "Halim";

  function add(param) {
    return value + param;
  }

  // return fungsi sebagai nilai
  return add;
}

const addTwo = createAdder(2);
console.info(addTwo(10));
