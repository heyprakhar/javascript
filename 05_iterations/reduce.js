// reduce function is oftenly used in shopping cart - 

const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and the currval is - ${currval}`);
// return acc + currval
// },0)

// another way to write the same code is - 

// const myTotal = myNums.reduce((acc,currval)=>acc+currval,0)

// console.log(myTotal);
//++++++++++++++++++++++++++++++++++++++++++++

// suppose this is the shopping cart of a user using your product - 

const shoppingCart = [
    {
      itemName : "jscourse",
      price : 999,

    },
    {
      itemName : "java",
      price : 1999,

    },
    {
      itemName : "python",
      price : 2999,

    }
]
// now you can find out the total of this cart using reduce method - 

const yourTotal=shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(yourTotal); // this will give the total of the prices of the items present in your cart.