//const tinderUser=new object()//->>>it is a singleton object;
const tinderUser={}//->>>.it is not a single tonobject

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"vikas@gmail.com",
    fullName:
    {
        userfullname:{
            firstname:"vikas",
            lastname:"gouda"
        }
    }
}

//console.log(regularUser.fullName.userfullname.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

//const obj3={obj1,obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } 
//const obj3=Object.assign({},obj1, obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3={...obj1,...obj2}//spread concept
//console.log(obj3);

const user =[
  {
    id:1,
    email:"cam@gmail.com"
  },
  {
    id:1,
    email:"cam@gmail.com"
  },
  {
    id:1,
    email:"cam@gmail.com"
  },
  {
    id:1,
    email:"cam@gmail.com"
  }
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLogged'));

const course={
    course:"js in hindi",
    price:"999",
    courseInstructor:"vikas"
}

// course.courseInstructor;

const {courseInstructor:Instructor}=course;
//console.log(courseInstructor)
//console.log(Instructor);

// {
//     "name":"vikas",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]

//json->javascript object notation



