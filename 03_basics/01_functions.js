// an snippet of code which can be called any time in a project
// function defining - 
function sayMyName(){
console.log("P");
console.log("R");
console.log("A");
console.log("K");
console.log("H");
console.log("A");
console.log("R");
}

//sayMyName()  //without parentheses - reference
            //with parentheses - function calling

  // func. for add. two numbers
  
   function addTwoNumbers(number1,number2){
     console.log(number1+number2);
   } //here on defining the functions number1 and number2 are called parameters , the values assigned to these parameters when the function is called are called arguments.

 // addTwoNumbers(3,4) // argument passing(here 3 and 4 are not parameters but arguments)

 // a better way to define this function -
 
 function sumOfTwoNumbers(number3,number4){
   let result = number3+number4
   return result // after this return keyword , any console.log will not work
 }

 const result = sumOfTwoNumbers (4,5)
console.log("result:",result);

function logInUserMessage(username){
  if(username === undefined){
    console.log("Please Enter a Username");
    return
  }
   return `${username} just logged in`
}

console.log(logInUserMessage("Prakhar"))

            