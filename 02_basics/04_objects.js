//const tinderUser = new Object() //singleton object
const tinderUser = {
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false
}
// console.log(tinderUser);

const regularUser = {
    email : "Prakhar@google.com",
    fullname : {
        userfullname: {  
            firstname: "prakhar",
            lastname :"tripathi",       //nesting of objects

        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);


// merging of values
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}
// first method to merge the objects 
//const obj4 = Object.assign({}, obj1 , obj2,obj3) // {} - empty parentheses acts as target and signifies the other objects as source as syntax of assign is {target,source} , it is not necessary to add an empty parentheses but it is a good practice to do.

// 2nd method to merge the objects
obj4 ={...obj1,...obj2,...obj3} //spread method - easiest and the most advanced method to merge the objects
//console.log(obj4);
//when data is directly coming from DataBase-

const users= [
    {
        id: 1,
        email: "harshit@google.com",
    },
]
users[0].email
/*console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));*/


// De-Structure of an object-
const course = {
    coursename : "JavaScript",
    price:"999",
    courseinstructor:"hitesh",
}

const {courseinstructor:instructor} = course //syntax of object destructure- helps in easy fetch of the data available in an object , we can even rename the key name by using a colon as i have used above for courseinstructor 
console.log(instructor);

// json api basic syntax -

// {
//     "name" :"prakhar",
//     "coursename" : "js",
//     "price":"999",
// }
