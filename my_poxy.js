// // 构建一个新的对象类型Object的构造器，以达到proxy的效果，无需递归拦截
class MyProxy {
    constructor(obj) {
        let map = new Map();
        this._map = map;
        this.init(obj, map);
        // let proxy = this.createProxy(map, obj);
        // return proxy;
    }
    init(obj, map) {
        for (let prop in obj) {
            // console.log(prop)
            this.def(obj,'_obj_',this);
            // if (typeof obj[prop] === 'object') {
            //     map.set(prop, Object.assign({}, obj[prop]));
            //     this.init(obj[prop], map);
            // } else {
            //     map.set(prop, obj[prop]);
            // }
        }
    }
    def(obj, key, val, enumerable) {
        Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true
        });
    }
    createProxy(map, obj) {
        for (let prop in obj) {
           
            // if (typeof obj[prop] === 'object') {
            //     obj[prop] = this.createProxy(map,obj[prop]);
            //     // console.log(map.get(prop));
            // }
            Object.defineProperty(obj, prop, {
                get() {
                    console.log(`obj${obj.toString()}/prop:${prop} => ${map.get(prop)}`)
                    return map.get(prop);
                }
            });
        }
        return obj;
    }
}
let temp = new MyProxy({
    a: {
        b: {
            c: 1
        }
    }
});
// let obj = {
//     'a': {
//       'b': {
//         'c' : 1
//       }
//     }
//   };
//   function observe(obj) {
//     if (obj !== null && typeof obj === 'object') {
//       Object.keys(obj).forEach(key => {
//         let internalValue = obj[key];
//         observe(internalValue); // 递归调用observe，处理内部对象
//         Object.defineProperty(obj, key, {
//           get() {
//             console.log(`Getting property: ${key}`);
//             return internalValue;
//           },
//           set(newValue) {
//             console.log(`Setting property: ${key} with value: ${newValue}`);
//             internalValue = newValue;
//           }
//         });
//       });
//     }
//     return obj;
//   }
  
//   obj = observe(obj);
  
// //   console.log(obj.a.b); // 输出: Getting property: a, Getting property: b，然后输出: 1
// //   obj.a.b = 2; // 输出: Setting property: b with value: 2
//   console.log(obj.a.b.c); // 输出: Getting property: a, Getting property: b，然后输出: 2
  
// function def(obj, key, val, enumerable) {
//     Object.defineProperty(obj, key, {
//         value: val,
//         enumerable: !!enumerable,
//         writable: true,
//         configurable: true
//     });
// }
// def(obj,'_obj_',"a");
// console.log(obj)