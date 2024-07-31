/*

EXPORT DEFAULT

- Sampai saat ini, kita selalu melakukan export dengan nama, baik itu nama variable, function dan yang lainnya
- Ada juga fitur yang bernama export default, ini adalah fitur yang digunakan untuk 
  mempermudah untuk membuat default data di module, dan membantu JavaScript agar kompatibel 
  dengan CommonJS dan AMD module system

CARA EXPORT DEFAULT
- export default namaFunction;
- export default function(){ ... }
- export default namaVariable;
- export default namaVariable = value;
- export default NamaClass;
- export default class { ... }


CARA IMPORT DEFAULT
- import aliasFunction from “./module-default.js”
- import {default as aliasVariable} from “./module-default.js”
- import aliasVariable from “./module-default.js”
- import {default as aliasVariable} from “./module-default.js”
- import AliasClass from “./module-default.js”
- import {default as AliasClass} from “./module-default.js”
*/

export default function (name) {
  console.info(`Hello ${name}, from default function`);
}
