// Nullish Coalescing -> Operator mirip ternary, bedanya default value baru akan di ambil ketika bernilai null atau undefined

let parameter;

// let data = parameter;

// if (data == undefined || data == null) {
//   data = "Default Value";
// }

let data = parameter ?? "Default Value";

document.writeln(`<p> ${data} </p>`);
