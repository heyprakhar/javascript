const accountId = 144553 //these const's values can't be changed further and will be constant
let accountEmail="prakhar@google.com" //let is the best way to declare a variable in js due to issues in functional scope
var accountPassword="12345"
accountCity="gorakhpur"

accountEmail="harshit@google.com"
accountPassword="123"
accountCity="noida"
let accountState;
//accountId=2 this code will produce an error as accountId value is constant and already defined, so this is not allowed
//console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);