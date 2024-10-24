
// let a = 'test("Testdome", "TD")'.split("(").filter((item)=>{
//     return item!="test";
// }).join("").split(")")[0].split(",");
// console.log(a)
let strr =  'test("Testdome", "TD")';
let getInput = function (str) {
    let arr = str.split("(").filter((item) => {
        return item != "test";
    }).join("").split(")")[0].split(",");
    return arr;
}
console.log(getInput(strr));