const cricketers=["sachin","virat","rohit"];
const rcb=["rajat","viart","jitesh"];


//joing the array by using PUSH it is not the correct way to join 
//cricketers.push(rcb);
// console.log(cricketers); o/p:-->[ 'sachin', 'virat', 'rohit', [ 'rajat', 'viart', 'jitesh' ] ]
// console.log(cricketers[3][1]);


//join the array by using CONCATINATION
// const allcricketers=cricketers.concat(rcb);
// console.log(allcricketers);  o/p:-->[ 'sachin', 'virat', 'rohit', 'rajat', 'viart', 'jitesh' ]


//SPREAD operator use to join the two array
const allcricketers=[...cricketers, ...rcb];

// console.log(allcricketers);

const another_arr=[1,2,3,[4,5,6], 7, [6,7,[4,5]]];
const real_another_arr=another_arr.flat(Infinity);
console.log(real_another_arr);


console.log(Array.isArray("vikas"))
console.log(Array.from("vikas"));
console.log(Array.from({name:"vikas"})); // important  it will give empty because u are not specifying anything like u have to print key or value so its is null

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));  // it will create  an array by use of those score1 and score2 and score3;
