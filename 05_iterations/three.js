//high order array loops - 
// loop on an array- 

const arr = [1,2,3,4,5]

for (const  num of arr) {
    console.log(num);
}

//loop on a string - 

const greetings = "Hello world"
for (const greet of greetings) {
    if(greet === " "){
        continue
 }
    console.log(`each character is - ${greet}`);
}