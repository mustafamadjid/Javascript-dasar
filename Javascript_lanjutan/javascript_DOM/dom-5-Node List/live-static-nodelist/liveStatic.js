/*

    1.NodeList memiliki 2 tipe, yaitu Live dan Static
    2.Live artinya perubahan yang terjadi pada NodeList nya, akan merubah semua NodeList yang sama
    3.Static artinya perubahan yang terjadi pada NodeList nya, tidak akan merubah semua NodeList yang sama
    4.Saat kita menggunakan element.childNodes, NodeList tersebut bersifat Live
    5.Saat kita menggunakan document.querySelectorAll(), NodeList tersebut bersifat Static


*/

// Live
// const menu1 = document.getElementById("menu-1");
// const list = menu1.childNodes;

// menu1.appendChild(document.createElement("li"));
// menu1.appendChild(document.createElement("li"));

// console.log(list);

// Static
const list2 = document.querySelectorAll("li");
const menu2 = document.getElementById("menu-2");

menu2.appendChild(document.createElement("li"));
menu2.appendChild(document.createElement("li"));

console.info(list2);
