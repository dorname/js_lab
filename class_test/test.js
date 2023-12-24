const Base = require('./base');
let t = new Base("test",{
    test:"测试ing"
});

t.on("read",function(arg1,arg2){
    console.log("测试读监听器：",arguments,arg1,arg2);
});
t.on("write",function(arg1,arg2){
    console.log("测试写监听器：",arguments,arg1,arg2);
});
console.log(t.get("test"));
t.set("demo","heihei");
console.log(t.get("demo"));
// let d = function(){
//     console.log(this,arguments);
// };
// // d(1,Array.prototype.slice.call(["t","a"], 0));
// d.apply({
//     "ceshi":"测试"
// },[1,"2",'t'])

