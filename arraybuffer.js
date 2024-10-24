// 创建长度为 8 的 int16 数组
const container = new Int16Array(8); 
// 把定型数组复制为前 4 个值
// 偏移量默认为索引 0 
container.set(Int8Array.of(1, 2, 3, 4)); 
console.log(container); // [1,2,3,4,0,0,0,0] 
// 把普通数组复制为后 4 个值
// 偏移量 4 表示从索引 4 开始插入
container.set([5,6,7,8], 4); 
console.log(container); // [1,2,3,4,5,6,7,8] 
// 溢出会抛出错误
container.set([5,6,7,8], 7); 
// RangeError