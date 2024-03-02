// variables in typescript
console.log("-------------variables-----------------");
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
console.log("-------------json object-----------------");
var obj = {
    "name": "mike",
    "age": 30
};
console.log(obj.name, obj.age);
console.log(obj.name);
// create array in ts
console.log("-------------create array-----------------");
var arr = [10, 12, 14, 16, 18];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
// function 
console.log("-------------function-----------------");
function addNum(x1, x2) {
    console.log(x1 + x2);
}
addNum(10, 20);
function test() {
    console.log("Hello world");
}
test();
// return method
console.log("-------------return method--------------");
function addNum1(x1, x2) {
    return (x1 + x2);
}
var v = addNum(10, 20);
console.log(v);
// concatenation
console.log("------------concatenation---------------");
function addNum2(x1, x2) {
    return x1 + String(x2);
}
var x = addNum2("mike", 20);
console.log(x);
// optional parameter
console.log("------------optional parameter---------------");
function test1(x1, x2) {
    console.log(x1);
    console.log(x1);
}
test1(10);
// default parameter
console.log("--------------default parameter-------------");
function test2(x1, defaultValue) {
    if (defaultValue === void 0) { defaultValue = 10; }
    console.log(x1);
    console.log(defaultValue);
}
test2(40);
// for loop
console.log("--------------for loop-------------");
function loopFor(n) {
    for (var i = 0; i < n.length; i++) {
        console.log(n[i]);
    }
}
var y = [12, 24, 36, 48, 60];
loopFor(y);
// rest parameter
console.log("--------------rest parameter-------------");
function restParameter() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    for (var i = 0; i < n.length; i++) {
        console.log(n[i]);
    }
}
restParameter(12, 23, 4, 54, 23);
console.log("-------------------------");
function restParameter1(s) {
    var n = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        n[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < n.length; i++) {
        console.log(n[i]);
    }
    console.log(s);
}
restParameter1("guarav", 1, 2, 3, 5, 4);
// backtick(``)
console.log("------------backtick(``)-------------");
function backTick(name, city) {
    console.log("".concat(name, " ").concat(city));
}
backTick('mike', 'chennai');
// Arrow function
var varName = function (x1, x2) {
    return x1 + x2;
};
var result = varName(10, 30);
console.log(result);
// if you want to remove {} bracket then return keyword is not working
var varName1 = function (x1, x2) { return x1 + x2; };
var result = varName1(12, 12);
console.log(result);
// zero parameter 
var varName2 = function () {
    console.log("Hello World");
};
varName2();
// Assignment
// develop function to multiply two number return multiple two number
function multiTwoNum(x1, x2) {
    return x1 * x2;
}
var result = multiTwoNum(10, 10);
console.log(result);
// create a array to store 3 values
var arr = [12, 14, 16];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// create an arraw function to multiply two numbers
var varName = function (x1, x2) { return x1 * x2; };
var resu = varName(1, 2);
console.log(resu);
// enum
console.log("------------enum------------");
var Val;
(function (Val) {
    Val[Val["Red"] = 0] = "Red";
    Val[Val["Green"] = 1] = "Green";
    Val[Val["Yellow"] = 2] = "Yellow";
})(Val || (Val = {}));
console.log(Val);
console.log(Val[0]);
console.log(Val[1]);
console.log(Val[2]);
