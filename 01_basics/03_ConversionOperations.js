let score = "33"
let num = "33abc"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(typeof(valueInNumber));
console.log(typeof num);
console.log(num);
//"33" ==> gets converted in string on putting between inverted commas 
//"33abc" ==> doesn't gets converted in string even on putting between inverted commas and gives NaN(not a number as the o/p).