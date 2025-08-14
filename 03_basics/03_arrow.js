const user={
    username:"hitesh",
    price:999,
    welcomeMessage: function()
    {
        // console.log(`${this.username} , welcome to website`)
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username="vikas"
// user.welcomeMessage()

// console.log(this);

//ARROW FUNCTION


//if we use curly braces we need to write the return value else it will give error
// const addTwo=(num1, num2) =>
// {
//    return num1+num2;
// }

//Implicit declartaion
//const addTwo=(num1, num2) => num1+num2;

// const addTwo=(num1, num2) =>(num1+num2);
const addTwo=(num1,num2) =>({username:"vikas"})
console.log(addTwo(2,4));