/* 

 Nested Function -> Fungsi dalam fungsi

*/

function outer() {
  function inner() {
    document.writeln("Called Inner Function");
  }

  inner();
}

outer();
