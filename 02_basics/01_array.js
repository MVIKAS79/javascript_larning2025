//arrays

// index start from 0;
const myArr=[0,1,2,3,4,5]
// console.log(myArr[1]);

//Array methods

// myArr.push(6);
// myArr.push(7);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

//myArr.unshift(9);
// myArr.shift()

// console.log(myArr.includes(9));//true or false;
// console.log(myArr.lastIndexOf(9));//if its not there in arr it print -1
// console.log(myArr.lastIndexOf(3));//if its there in arr it print index 3
// const newArr=myArr.join();
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr);

//slice, splice

//slice
console.log("A ",myArr);
const myn1=myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

//splice
const myn2=myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
