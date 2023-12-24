// let p = new Promise((rs,rj)=>{
//     console.log(">>>:");
//     rj();
// }).catch(function(){
//     console.log(arguments);
// })
// setTimeout(console.log, 0, p);
let p1 = new Promise(function(rs,rj){
    setTimeout(rj, 10, "test");
}).then(function(){
    console.log("1:",arguments)
},function(){
    console.log("2:",arguments)
}).catch((err)=>{
    console.log("catch:",err)
}).finally(function(){
    console.log(arguments)
});
// let p1 = new Promise((resolve, reject) => resolve()); 
// setTimeout(console.log, 0, p1); //
// let p2 = Promise.resolve(3)
// console.log(p2);
// setTimeout(console.log, 0, Promise.resolve(3));
// let p1 = new Promise((resolve, reject) => reject("test")).then(function(){
//     console.log("resolve___");
// },function(){
//     console.log("reject____");
// }).catch(function(err){
//     console.log(err)
// });