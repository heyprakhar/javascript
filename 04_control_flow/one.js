// const score = 200
// if (score>100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// use of nesting in actual products - 

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("allow to purchase course");
} else {
    console.log("do not allow to purchase course");
}

// another example - 
const loggedInfromGmail = true
const loggedInfromGoogle =false 

if (loggedInfromGmail || loggedInfromGoogle) {
    console.log("user allowed"); // || stands for "or" and if any of the condition is true then it allows to enter the code block
} else {
    console.log("user not allowed");
}