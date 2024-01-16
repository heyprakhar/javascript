// we can create an object by two method - constructor and literal
//constructor way - Object.create - singleton is made in this method 
// literal way - const JsUser {} , where JsUser is now the name of the object , we will focus on literal at this moment -
const mySym = Symbol("key1") // declaration of a symbol

const JsUser={
    name:"Prakhar",
    age : 18,
    [mySym] : "Key1", //syntax to use the datatype - symbol
    location : "gorakhpur",
    email : "prakhar@google.com",
    isLoggedIn: true,
    lastLoginDays:["Monday", "Saturday"]
}
//console.log(JsUser.age); //wrong method to fetch the value
// console.log(JsUser["age"]);
// console.log(JsUser[typeof mySym]);
// console.log(typeof mySym);
// console.table(JsUser)
JsUser.greeting = function(){
   console.log(`hello user, ${this.name} of ${this.age} years`);
}
console.log(JsUser.greeting());