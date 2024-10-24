let m = new Map();
// m = 1;
let arr = [1,4,5,6];
let m1 = new Map([
    ['a',1],
    ['b',2]
]);
let m2 = new Map(arr.entries());
console.log(m);
console.log(m1);
console.log(m2);
console.log(m.has(undefined),m.get(undefined));
console.log(m1.has(undefined),m1.get(undefined));
console.log(m2.has(undefined),m2.get(undefined));


m.set(m1,m2);
let a = function(){
    console.log(1)
};
m.set(function(){
    console.log(1)
},arr);
m.set(a,arr);
console.log(m);
console.log(m.get(m1));
console.log(m.get(function(){
    console.log(1)
}));
console.log(m.get(a));
arr = [7,8,9];
console.log(m.get(a));
m1.delete('a');
console.log(m1,m.get(m1))
m.clear();
