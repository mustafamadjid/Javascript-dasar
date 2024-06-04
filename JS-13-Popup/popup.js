alert("This is an alert popup");

let enter = confirm("Confirm first if you desired to see our site");

if (enter) {
  let name = prompt("Tell us your name : ");
  alert(`Hi ${name} welcome to our site`);
} else {
  alert("See you next time !");
}
