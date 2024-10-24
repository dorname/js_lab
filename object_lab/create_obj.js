// function createPerson(name, age, job) { 
//     let o = new Object(); 
//     o.name = name; 
//     o.age = age; 
//     o.job = job; 
//     o.sayName = function() { 
//     console.log(this.name); 
//     }; 
//     return o; 
//    } 
//    let person1 = createPerson("Nicholas", 29, "Software Engineer"); 
//    let person2 = createPerson("Greg", 27, "Doctor"); 
// person1.sayName();
// person2.sayName();
function Person(name, age, job){ 
    this.name = name; 
    this.age = age; 
    this.job = job; 
    this.sayName = function() { 
    console.log(this.name); 
    }; 
   } 
//    let person1 = new Person("Nicholas", 29, "Software Engineer"); 
//    let person2 = new Person("Greg", 27, "Doctor"); 
//    person1.sayName(); // Nicholas 
//    person2.sayName(); // Greg
//    window.sayName();
   let o = new Object(); 
Person.call(o, "Kristen", 25, "Nurse"); 
// o.sayName(); // "Kristen"
let test = function(){
    this.sayName();
    console.log(arguments);
}
test.call(o,"s");