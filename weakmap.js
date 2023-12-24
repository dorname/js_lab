const key1 = {
    id:1
},key2 = {
    id:2
},key3 = {
    id:3
};
const wm = new WeakMap([
    [key1,{
        test_fst:1
    }],
    [key2,{
        test_sec:2
    }]
]);

console.log(wm);
//WeakMap {{id: 2} => {test_sec: 2}, {id: 1} => {test_fst: 1}}
console.log(wm.get(key1));
//{test_fst: 1}

wm.set(key3,{
    test_trd:3
});
console.log(wm);
//WeakMap {{id: 2} => {test_sec: 2}, {id: 3} => {test_trd: 3}, {…} => {test_fst: 1}}

console.log(wm.has(key3));
//true

console.log(wm.get(key3));
//{test_trd: 3}

wm.delete(key3);
console.log(wm.has(key3));
//false

console.log(wm.get(key3));
//undefined
