let data = [1,2,3,4,5,6,7,8];
let getOdd  = function(arr){
    return arr.filter(function(val){
        return val%2 == 0;
    }).sort(function(a,b){
        return b-a;
    });
}
console.log(getOdd(data));