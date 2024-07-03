let counter = 1;

// Break
while (true) {
  document.writeln(`Count : ${counter}`);
  document.writeln("<br>");
  if (counter >= 12) {
    document.writeln(`Loop end`);
    break;
  }
  counter++;
}

document.writeln("<br>");
document.writeln("<br>");

// Continue
let counter_2 = 1;
for (let counter_2 = 1; counter_2 <= 12; counter_2++) {
  if (counter_2 % 2 === 0) {
    continue;
  }
  document.writeln(`Odd Num : ${counter_2}`);
  document.writeln("</br>");
}
