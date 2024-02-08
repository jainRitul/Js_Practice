//Spread with array
let arr = [1,2,3,4];
let arr1 = [5,6,7,8];
let newArr = [...arr,...arr1];
console.log(newArr);

//spread with obj literals
let data = {
    name:"Ritul",
    email :"rituljain@0206",
    phn : 7877848543,
    id:1
}
let newData = {...data,country :"India"}
console.log(newData);


//demo for array 
let prac = [1,3,2];
let obj1 = {...prac}
console.log(obj1);