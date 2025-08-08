// singleton 

//when we are declaring like literals they are not sigleton
//when we are declaring like constructors they are became or called singleton

//object literals
// Object.create ---->constructor in this singleton will create
const mySym=Symbol("key1");
const jsUser={
    name:"vikas",
    "fullName":"M vikas",
    mySym:"mykey1",
    rollno:41,
    age:20,
    location:"jaipur",
    email:"vikas@gmail.com",
    isLoggedIn: false,
    lastLogginDays:["Monday","sunday"]
}
// console.log(jsUser.name)//this is not the correct way to access
// console.log(jsUser["email"])
// console.log(jsUser["fullName"])
// console.log(jsUser[mySym])

jsUser.email="vicky@gmail.com"
//Object.freeze(jsUser)
jsUser.email="vikas@gmail.com"
//console.log(jsUser);



// FUNCTIONS 

jsUser.greeting=function()
{
    console.log("Hello m vikas");
}
console.log(jsUser.greeting());


jsUser.greetingTwo=function()
{
    console.log(`Hello m vikas,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());