// const people = [ 
//     { 
//     name: "Matt", 
//     age: 27 
//     }, 
//     { 
//     name: "Nicholas", 
//     age: 29 
//     } 
//    ]; 
//    console.log(people.find((element, index, array) => element.age < 28)); 
//    // {name: "Matt", age: 27} 
//    console.log(people.findIndex((element, index, array) => element.age < 28)); 
//    // 0

//    console.log(people.find((element, index, array) => element.age == 28));
//    // undefined
//    console.log(people.findIndex((element, index, array) => element.age == 28)); 
//    // -1
let arr = new Array(10);
console.log("arr:",arr);
arr = new Array({
    id:1
},{
    my_id:2
})
console.log("arr:",arr);