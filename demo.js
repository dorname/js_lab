var a = "-5+{date}-{num}-5+8-6";
// 正则表达式模式
//匹配所有花括号及其内容
var pattern =   /\{(.+?)\}/g;

//匹配花括号完整公式
var pattern0 = /\{(.*)\}/

// 匹配公式中的模式，并提取相关内容
var forumn = a.match(pattern0)[0];
// 匹配公式中的模式，并提取相关内容
var match = a.match(pattern);
var match0 = a.match(pattern)[0];
var match1 = a.match(pattern)[1];
console.log("forumn:",forumn);
console.log("match:",match);
console.log("match0:",match0,"\nmatch1:",match1);
a = a.replace(match0,0);
a = a.replace(match1,0);
a = "return "+a;
// 除了item1、item2之外的计算结果 -5+0+0 -5-8+6
var other_result = new Function(a)();
//获取item1、item2之间运算符
oper = forumn.match(/[+|-]/)[0];
var num  = 9;
// -8+9 = 1
var numberField =new Function("return "+oper+num+other_result)();
//"-5+{date}+{num}-5+8-6"
//-5-9-5+8-6 = 0
console.log(numberField,"<<<<<");

// //替换item1
// forumn = forumn.replace(match0,8);
// //替换item2
// forumn = forumn.replace(match1,9);
// forumn = "return "+forumn+other_result;
//最后的计算结果
// 8+9-8
// var final_result = new Function(forumn)();
// console.log(forumn,match,match0,match1,"<<<<",other_result,oper,numberField);
// 解析结果
// var str="hello {name}";
// var nstr = str.replace(/\{[^\}]+\}/,"coffey");
 
// console.log(nstr);