// var obj = {
//     "name": "test"
// };
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// Object.defineProperty(obj,"name",{
//     writable:false,
//     value:"can't write"
// });
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// console.log("1:",obj.name);
// obj.name = "test";
// console.log("2:",obj.name);
// Object.defineProperty(obj,"name",{
//     configurable:false,
//     value:"can't delete"
// });
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// delete obj.name;
// console.log("3:",obj.name);
console.log(1+true)
console.log("1"+0.1);
let str = "hello";
let str_num = "2";
let num = 40;
let bol = true;
console.log(str+num);
console.log(str_num+num);
console.log(str_num+bol);
console.log(str+bol);
console.log(num+bol);
console.log(str>bol,str_num>bol);
console.log(str>num,str_num>num);