let data = prompt("Insert a data with any type : ");

if (typeof data == "number") {
  document.writeln("Number");
} else if (typeof data == "string") {
  document.writeln("String");
}
