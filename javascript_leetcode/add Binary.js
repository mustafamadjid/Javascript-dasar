let a = "111";
let b = "1";

let addBinary = function (a, b) {
  const binaryToDecimal = (binary) => {
    let decimal = 0;
    for (let i = binary.length - 1, j = 0; i >= 0; i--, j++) {
      decimal += parseInt(binary[i]) * Math.pow(2, j);
    }
    return decimal;
  };

  let decimal_1 = BigInt(binaryToDecimal(a));
  let decimal_2 = BigInt(binaryToDecimal(b));

  let decimalSum = BigInt(decimal_1 + decimal_2);

  return decimalSum.toString(2);
};

console.log(addBinary(a, b));

// Leetcode solution

// var addBinary = function (a, b) {
//   let sum = BigInt("0b" + a) + BigInt("0b" + b);
//   return sum.toString(2);
// };
