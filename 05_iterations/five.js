//for each loop - 

const coding = ["js","java","ruby","python"]

coding.forEach( function (item){
    // this function is a callback function
   // console.log(item);
})

//when the values are directly coming from database - 

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName); //we can access any property of an object of an array with this method 
});