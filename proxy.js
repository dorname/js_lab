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
var warnReservedPrefix_1 = function (target, key) {
    warn$2("Property \"".concat(key, "\" must be accessed with \"$data.").concat(key, "\" because ") +
        'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
        'prevent conflicts with Vue internals. ' +
        'See: https://v2.vuejs.org/v2/api/#data', target);
};
var warnNonPresent_1 = function (target, key) {
    warn$2("Property or method \"".concat(key, "\" is not defined on the instance but ") +
        'referenced during render. Make sure that this property is reactive, ' +
        'either in the data option, or for class-based components, by ' +
        'initializing the property. ' +
        'See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
};
var hasHandler_1 = {
    has: function (target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals_1(key) ||
            (typeof key === 'string' &&
                key.charAt(0) === '_' &&
                !(key in target.$data));
        if (!has && !isAllowed) {
            if (key in target.$data)
                warnReservedPrefix_1(target, key);
            else
                warnNonPresent_1(target, key);
        }
        return has || !isAllowed;
    }
};
let p = new Proxy(deep_obj,hasHandler_1);
console.log(p.a)