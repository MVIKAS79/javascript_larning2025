const accountId=12233
var accountEmail="vikas@gmial.com"
let accountPassword="12345"
accountCity="Banglore"
let accountState;
//comment
//accountId=2 this will not happen because it declare as const
/* 
prefer not to use var 
because of issue in block space and functional  scope
*/
accountEmail="vicky@gmail.com"
accountPassword="12211"
accountCity="Ballari"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);