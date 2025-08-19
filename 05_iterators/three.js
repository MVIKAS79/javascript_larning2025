//for of loop

// ["","",""]
// [{},{},{}]

// const arr=[1,2,3,4,5]

// for (const it of arr) {
//     console.log(it);
// }

// const greetings="hello world";
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

//MAPS

const map=new Map();
map.set('IN',"INDIA");
map.set('USA',"United states of ameria");
map.set('Fr',"FRANCE");
map.set('IN',"INDIA");

//console.log(map);
for (const [key,val] of map) {
    //console.log(key,':-',val);
}

const myObject={
    'game1':'bgmi',
    'game2':'ff'
}
// for (const [key,val] of map) {
//     console.log(key,':-',val);//it will give a error
// }

