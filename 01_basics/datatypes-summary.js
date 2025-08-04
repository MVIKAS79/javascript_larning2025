// primitive

// 7 types: String,Number,Boolean,Null,undefined,Symbol,BigInt
// js is dynamically typed
const score=100;
const scoreVal=200.3

const isLoggedIn=false
const outsideTemp=null;
let useEmail;

const id=Symbol('123')
const anotherId=Symbol('123');

console.log(id===anotherId);

//const bigNumber=12345678923456

//console.log(bigNumber);
//Reference(Non primitive)

//Array,Objects,Functions,

const heros=["vikas","vicky"]
let myObj={
    name:"viky",
    age:22,
}

const myFunction=function(){
    console.log("hello,world");
}
console.log(typeof scoreVal);
console.log(typeof myFunction);
console.log(typeof heros);