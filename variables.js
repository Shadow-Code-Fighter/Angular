// variables in typescript
var x1 = 10;
console.log(x1);
var x2 = 10.9;
console.log(x2);
var x3 = "mike";
console.log(x3);
var x4 = true;
console.log(x4);
var x5 = 'stallin';
// x5=`gaurav`
console.log(x5);
// json object
var obj = {
    "name": "mike",
    "age": 30
};
console.log(obj.name, obj.age);
console.log(obj.name);
// create array in ts
var arr = [10, 12, 14, 16, 18];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
// function 
function addNum(x1, x2) {
    console.log(x1 + x2);
}
addNum(10, 20);
function test() {
    console.log("Hello world");
}
test();
// return method
function addNum1(x1, x2) {
    return (x1 + x2);
}
var v = addNum(10, 20);
console.log(v);
// concatenation
function addNum2(x1, x2) {
    return x1 + String(x2);
}
var x = addNum2("mike", 20);
console.log(x);
// optional parameter
function test1(x1, x2) {
    console.log(x1);
    console.log(x1);
}
test1(10);
