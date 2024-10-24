// let arr = [1,2,3];
// let arr1 = Array.from("123");
// let arr2 = new Array(4);
// console.log(arr,arr1,arr2);

// //利用数组索引进行新增、删除
// arr.length = 2;
// arr1.length = 4;
// arr1[arr1.length-1] = '5';
// console.log(arr,'\n',arr1);

// //数组类型检测
// console.log(arr instanceof Array);
// // console.log(typeof(arr));//object
// console.log(Array.isArray(arr));

// //数组的迭代器
// // console.log(Array.from(arr1.keys()));
// console.log(1 in arr.keys());
// for(let i of arr.keys()){
//     console.log(i);
// }

// //copyWithin第一个参数是插入位置、第二个参数复制起始索引、第三个参数是复制终止索引
// // arr.copyWithin(1)
// // console.log(arr)
// //插入索引1,数组会将0，arr.length-1(因为length<4)的内容复制，并从一个1开始插入，注意：此函数无法实现数组新增
// arr.copyWithin(2,0,4);
// console.log(arr);
// console.log(arr2);
// //fill 第一个参数是填充内容、第二个参数填充起始索引、第三个参数是填充终止索引
// arr2.fill(5,0,2);
// console.log(arr2);
// // console.log(Array.from(arr1.values()));
// // console.log(Array.from(arr1.entries()));

// //数组转换
// console.log(arr2.toLocaleString());
// console.log(arr2.toString());
// console.log(arr2.valueOf());
// console.log(arr2.join('@'));

// //数组的栈方法
// arr2.push(4,5);
// console.log("1:",arr2);
// arr2.pop();
// arr2.pop();
// console.log("2:",arr2);

// //数组的队列方法
// arr2 = [1,3,4,5,6];
// console.log("3:",arr2);
// //fifo
// arr2.shift();
// console.log("4:",arr2);
// //允许传输多个参数，每个参数都是头插的值
// arr2.unshift(1,2,3);
// console.log("5:",arr2);
// arr2.reverse();
// console.log("reverse:",arr2);
// // arr2.reverse();
// arr2 = [2,1,4,3,4,6,1,2];
// arr2.sort(function(next,current){
// // console.log(prev,current);
// return current-next;
// });
// console.log("sort:",arr2);

// //数组操作方法
// //concat 连接方法
// console.log(arr2.concat([9,11],13,12));
// //slice 切片方法
// console.log(arr2.slice(2,4));
// //splice 删除并插入
// arr2.splice(-2,1,"a");
// console.log("splice:",arr2);

// //数组检测
// //1
// console.log("indexof:",arr2.indexOf(2));
// console.log("lastIndexof:",arr2.lastIndexOf(2));
// console.log("includes:",arr2.includes("a"));//ES7
// //2
// console.log("find:",arr2.find((item,index,itself)=>{
//     console.log(item,index,itself,"<<<<");
//     return item === 'b';
// }));

// console.log("findindex:",arr2.findIndex((item,index,itself)=>{
//     console.log(item,index,itself,"???");
//     return item === 'b';
// }));
// //数组的迭代方法 迭代方法的参数都是回调和this上下文，使用箭头函数则无法指定上下文
// arr = [2,4,5];
// console.log("filter:",arr2.filter(function(item,index,itself){
//     if(item==='a'){
//         console.log("filter this:",this);
//         console.log("filter this[1]:",this[1]);
//         console.log(itself);
//     }
//     return item === 2;
// },arr));
arr = [2,4,5];
arr2 = [4,6,7,8,2,4,5,4];
//every 适合用于数组成员的合法性验证，验证元素的合法性
console.log(arr2.every(function(item,index,itself){
    return item>4;
},arr));
//map 适合用于数组成员的增强处理，返回一个新数组，不影响原数组的内容
console.log(arr2.map(function(item){
    return item+=1;
}));
//some 适合存在性验证
console.log(arr2.some(function(item){
    return item === 2;
}));

arr2.forEach(element => {
    console.log(element);
});
//归并函数
//适用于累计操作
console.log(arr2.reduce(function(pre,curr,currIdx,itself){
    console.log("pre",pre,curr,currIdx);
    return curr;
}))


