function recursive(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * recursive(n - 1);
  }
}

let result = recursive(5);

document.writeln(result);
