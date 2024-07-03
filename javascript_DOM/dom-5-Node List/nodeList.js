// Node list -> kumpulan dari node

let list = document.querySelectorAll("li");
console.info(list);

/*

    1.NodeList memiliki 2 tipe, yaitu Live dan Static
    2.Live artinya perubahan yang terjadi pada NodeList nya, akan merubah semua NodeList yang sama
    3.Static artinya perubahan yang terjadi pada NodeList nya, tidak akan merubah semua NodeList yang sama
    4.Saat kita menggunakan element.childNodes, NodeList tersebut bersifat Live
    5.Saat kita menggunakan document.querySelectorAll(), NodeList tersebut bersifat Static


*/
