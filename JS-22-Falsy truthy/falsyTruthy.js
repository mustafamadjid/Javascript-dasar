/* 

  Data yang dianggap falsy

  1. false (boolean false)
  2 0, -0
  3. '',"",`` (String kosong)
  4. null
  5. undefined
  6. NaN (Not a Number)



  Data yang dianggap truthy
  (selain dari falsy
    
  )

*/

let s = "";

if (s == false) {
  document.writeln("Null");
}
