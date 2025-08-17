// let a=100
// const b=200
// var c =300
// if(true){
//     let a=10
//     const b=20
//     var c=30//it prints this not a 300 because overide so dont use var keyword in js
// }
 
// console.log(a);
// console.log(b);
// console.log(c);

function one()
{
    const username="vikas";
    function two()
    {
        const website= " youtube";
        //console.log(username);
    }
    //console.log(website);
    //two()
}
if(true)
{
    const username="vikas";
    if(username==="vikas")
    {
        const website=" google";
        //console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);

//++++++++++++++++++++++++++++++++ intresting ++++++++++++++++++++++++

console.log(addone(5));
function addone(num) {
    return num+1;
}


//addTwo(5);---->it will give a error
const addTwo=function (num) {
   return  num+2;
}
