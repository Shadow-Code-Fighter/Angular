// variables in typescript
console.log("-------------variables-----------------")
var x1:number=10;
console.log(x1);

var x2:number=10.9;
console.log(x2);

var x3:String="mike";
console.log(x3);

var x4:boolean=true
console.log(x4);

var x5:any='stallin'
// x5=`gaurav`
console.log(x5);

// json object
console.log("-------------json object-----------------")
var obj={
    "name":"mike",
    "age":30
}
console.log(obj.name,obj.age)
console.log(obj.name)

// create array in ts
console.log("-------------create array-----------------")
var arr:number[]=[10,12,14,16,18]
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

// function 
console.log("-------------function-----------------")
function addNum(x1:number,x2:number):void{
    console.log(x1+x2)
}
addNum(10,20)

function test():void{
    console.log("Hello world")
}
test();

// return method
console.log("-------------return method--------------")
function addNum1(x1:number,x2:number):number{
    return (x1+x2)
}
var v = addNum(10,20)
console.log(v)

// concatenation
console.log("------------concatenation---------------")
function addNum2(x1:String,x2:number):String{
    return x1+String(x2);
}
var x:String=addNum2("mike",20);
console.log(x)


// optional parameter
console.log("------------optional parameter---------------")
function test1(x1:number,x2?:number):void{
    console.log(x1);
    console.log(x1);
}
test1(10);

// default parameter
console.log("--------------default parameter-------------")
function test2(x1:number,defaultValue=10):void{
    console.log(x1);
    console.log(defaultValue);
}
test2(40)

// for loop
console.log("--------------for loop-------------")
function loopFor(n:number[]):void{
    for(var i:number=0;i<n.length;i++){
        console.log(n[i]);
    }
}
var y:number[]=[12,24,36,48,60];
loopFor(y);

// rest parameter
console.log("--------------rest parameter-------------")
function restParameter(...n:number[]):void{
    for(var i:number=0;i<n.length;i++){
    console.log(n[i])
    }
}
restParameter(12,23,4,54,23);

console.log("-------------------------")
function restParameter1(s:string,...n:number[]):void{
    for(var i:number=0;i<n.length;i++){
        console.log(n[i])
    }
    console.log(s)
}
restParameter1("guarav",1,2,3,5,4,);