// class A{
//     constructor(){
//         console.log("A");
//     }
// }
// class B{
//     constructor(){
//       console.log("B");
//     }
// }
// A.prototype = new B();
// let a = new A();

// console.log(a.constructor===A);
//true

function Person(name,age){
    this.name = name;
    this.age = age;
    console.log("constructor",arguments);
}
// function Action(){
    
// }
let Action = {}
Person.prototype = Action;
console.log(new Person("one",23).constructor === Person);
console.log(new Person("two",22).constructor === Object);