// filter maps - 

 const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNums.filter( (item) => {
//     return item>5 // return keyword is necessary in explicit return , specially when you have used curly braces and started a scope 
// })
//console.log(newNum);

//++++++++++++++++++++++++++++++++++++++++++++

// another way of doing the same task using "for each" - 

const newNum = []
myNums.forEach( (num)=>{
    if (num>4) {
        newNum.push(num)
    }
})
console.log(newNum);

