//Double the no by map
let arr = [1,2,3,4];
let double = arr.map((el)=>{
    return el*2;
})


//calculate gpa for each student
let student= [
    {
        name : "Ritul",
        age : 19,
        marks : 97
    },
    {
        name : "Prinjsl",
        age : 19,
        marks : 98
    },
    {
        name : "Harshit",
        age : 23,
        marks : 99
    }
]
let gpa = student.map((el)=>{
    return el.marks/10;
})


//filter method
console.log("filter method");
let demo = [1,2,3,4,3,1,3,5,7,6,4,2,9,7];
let newArr = demo.filter((num)=>(num%2!=0));


//maximum from array using reduce method
let arr1 = [1,3,22,1];
let max = arr1.reduce((max,el)=>{
    if(el > max)
    return el;
    else 
    return max;
})
console.log(max);


//check all no in array are multiples of 10 or not
let a = [10,20,309,90];

console.log(a.every((el)=>(el%10 == 0)));


//find min in array
let prac = [4,3];
let min = prac.reduce((res,el)=>{
    if(el<res)
    return el
    else 
    return res
})


//Default Parameters
function fun(a,b=2){
    return a+b;
}