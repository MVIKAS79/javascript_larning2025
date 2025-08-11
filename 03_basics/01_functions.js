

//functions
// console.log("v");
// console.log("i");
// console.log("k");
// console.log("a");
// console.log("s");

//function defination
function sayMyName()//function->keyword,sayMyName->function name
{
    console.log("v");
    console.log("i");
    console.log("k");
    console.log("a");
    console.log("s");
}

//sayMyName //reference;
//sayMyName();//execute


//adding two numbers

// function addTwoNumbers(number1,number2) //num1 and num2 call as parameters
// {
//     console.log(number1+number2)
// }
// addTwoNumbers(3, null); //3,null call as agruments 
// addTwoNumbers(3, 4);
// addTwoNumbers(3, "a");
function addTwoNumbers(number1,number2) //num1 and num2 call as parameters
{
    // let result=number1+number2;
    // console.log("vikas")
    // return result;
    //console.log("vikas")

    return number1 + number2;
}
const result=addTwoNumbers(3, 5);
//console.log("Result: ",result);


function loginUserMessage(username="vicky")
{
    if(!username)
    {
        console.log("please enter the name");
        return;
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("vikas"));

// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,... num1)
{
    return num1;
}

//console.log(calculateCartPrice(200, 400, 500,300));

const user={
    username:"vikas",
    prices:199
}

// function handleObject(anyobject)
// {
//     console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
// }
// //handleObject(user);
// handleObject({
//     username:"sam",
//     price:399
// })

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray)
{
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,300,100]));