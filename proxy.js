// const obj = {
//     "id":Symbol("id"),
//     "key":"test",
//     "size":6
// };
// // let {proxy,revoke} = Proxy.revocable(obj,{
// //     get(obj_self,key,self){
// //         console.log("get:",arguments);
// //         // return key+":"+obj_self[key];
// //         // return Reflect.get(...arguments);
// //         return Reflect.get(obj_self,key);
// //     },
// //     set(obj_self,key,newValue,self){
// //         console.log("set:",arguments);
// //         // obj_self[key] = newValue;
// //         Reflect.set(...arguments);
// //     }
// // });
// // console.log(obj.key);
// // proxy.key = "测试";
// // console.log(proxy.key);
// // revoke();
// // // console.log(obj.key);
// // proxy.key = "test";
// console.log("test" in obj);
// console.log();
let deep_obj = {
    a: {
        b: {
            c: {
                d: "deep",
            },
        },
    },
},
    deep_handle = {
        set() {
            console.log("set:", arguments);
            Reflect.set(...arguments);
        },
        get() {
            console.log("get:", arguments);
            return Reflect.get(...arguments);
        },
    };
let deep_proxy = new Proxy(deep_obj, deep_handle);
console.log(deep_proxy);

