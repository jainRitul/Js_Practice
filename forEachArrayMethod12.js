//forEach Method
let arr = [1,3,2,4];
console.log("by giving the paramenter in forEach as the function name");
function print(el){
    console.log(el);
}
arr.forEach(print);

//or we can do the same thing by this
console.log("by arrow fun");
arr.forEach((el)=>{
    console.log(el);
})

//or by using simple fun
console.log("by simple function");
arr.forEach(function(el){
    console.log(el);
})




//forEach to access the individual property of obj
let student= [
    {
        name : "Ritul",
        age : 19
    },
    {
        name : "Prinjsl",
        age : 19
    },
    {
        name : "Harshit",
        age : 23
    }
]

student.forEach((el)=>
{
    console.log(el.age);
})
