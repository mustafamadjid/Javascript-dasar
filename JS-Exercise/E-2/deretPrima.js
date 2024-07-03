function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

let input = Number(prompt("Masukan Angka : "));

for (let i = 2; i <= input; i++) {
  if (isPrime(i)) {
    document.writeln(i);
    document.writeln("<br>");
  }
}
