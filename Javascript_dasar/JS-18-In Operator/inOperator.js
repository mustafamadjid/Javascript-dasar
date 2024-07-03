// In operator digunakan untuk mengecek apakah sebua property ada di dalam object atau tidak

let person = {
  firstName: "Kuntadi",
  lastName: "Rudi",
};

if ("firstName" in person) {
  alert(`Hello ${person.firstName}`);
} else {
  alert("NOTHING");
}

let ar = [1, 2, 3];

if (4 in ar) {
  alert("ada");
} else {
  alert("GADA");
}
