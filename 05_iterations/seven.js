const myNumbers = [11,12,13,14,15,16,17,18,19,20] 

// const numbers = myNumbers.map( (num)=>{
//  return num + 10 
// })
// console.log(numbers);

// chaining of functions - in this technique , we use multiple types of function in multiple times 

const newNum = myNumbers
.map((num)=> num*10)
.map((num)=> num + 1)

console.log(newNum);