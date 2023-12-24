const s = new Set();
let obj_zero = {
    id:0
},obj_fst = {
    id:1
};
s.add(obj_zero).add(obj_fst).add({
    id:3
});
console.log(s);
//Set(3) {size: 3, {id: 0}, {id: 1}, {id: 3}}
console.log("size:",s.size);
//size: 3
console.log("Has obj_first: ",s.has(obj_fst));
//Has obj_first:  true
s.delete({
    id:3
});
console.log("After delete: ",s);
//After delete:  Set(3) {size: 3, {id: 0}, {id: 1}, {id: 3}}

var third;
for(let i of s.keys()){
    console.log(i)
    third = i;
}
//{id: 0}
//{id: 1}
//{id: 3}

s.delete(third);
console.log("After delete: ",s);
//After delete:  Set(2) {size: 2, {id: 0}, {id: 1}}

// s.clear();
// console.log("After clear: ",s);
//After clear:  Set(0) {size: 0}

// s.forEach(function(val,duplicate_val,set){
//     console.log(val,duplicate_val,set);
// });
const keys = s.keys();
console.log("keys:",keys);//keys: SetIterator {{id: 0}, {id: 1}}
for(let key of keys){
    console.log("key:",key);
    //key: {id: 0}
    //key: {id: 1}
}
console.log("keys after used: ",keys);//keys after used:  SetIterator

let keys_arr = Array.from(s.keys());
console.log("keys_arr: ",keys_arr); //keys_arr:  (2) [{…}, {…}]



const values = s.values();
console.log("values:",values);//values: SetIterator {{id: 0}, {id: 1}}

for(let val of values){
    console.log("val:",val);
    //val: {id: 0}
    //val: {id: 1}
}
console.log("values after used: ",values);//values after used:  SetIterator

let values_arr = Array.from(s.values());
console.log("values_arr: ",values_arr); //values_arr:  (2) [{id:0}, {id:1}]

const entries = s.entries();
console.log("entries:",entries);//entries: SetIterator {{id: 0} => {id: 0}, {id: 1} => {id: 1}}

for(let entry of entries){
    console.log("entry:",entry);
    //entry: (2) [{id:0}, {id:0}]
    //entry: (2) [{id:1}, {id:1}]
}
console.log("entries after used: ",entries);//entries after used:  SetIterator

let entries_arr = Array.from(s.entries());
console.log("entries_arr: ",entries_arr); //entries_arr:  (2) [[{id:0}, {id:0}], [{id:1}, {id:1}]]
