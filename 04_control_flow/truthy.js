// const userEmial="vikas.ai";

// if(userEmial)
// {
//     console.log("Got user email");
// }
// else
// {
//     console.log("dont have user email");
// }


//falsy value

//false,0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){}

// if(userEmail.length===0)
// {
//     console.log("array is empty");
// }

// const emptyObj={};
// if(object.keys(emptyObj).length===0)
// {
//     console.log("objuect is empty");
// }

//Nullish coalescing operator(??):null undefined

let val1;
//val1=5 ?? 10
// val1=null??10
//var1=undefined??15
var1=null??10??10
console.log(val1);


//Terniary operator

//condition ? true:false

const  iceTeaPrice=100;
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80");