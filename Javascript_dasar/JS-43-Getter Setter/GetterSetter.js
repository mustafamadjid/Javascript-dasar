let person = {
  firstName: "Mustafa",
  lastName: "Madjid",
  // Getter
  get fullName() {
    return ` My name is ${this.firstName} ${this.lastName}`;
  },

  // Setter
  set fullName(val) {
    let array = val.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  },
};

person.fullName = "Budi Andika";
console.table(person);

document.writeln(person.fullName);
