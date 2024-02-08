// Square and sum the array elements using the arrow function and then find the average of the array
let num = [1,2,4,5];
let squ = num.map((num)=>num*num)
console.log(squ);

let sum = squ.reduce((acc,curr) =>acc+curr , 0 );
console.log(sum);



// Create a new array using the map function whose each element is equal to the original element plus 5
let newArr = num.map((num) => num + 5)
console.log(newArr);


//Create a new array whose elements are in uppercase of words present in the original array
let str = ["ritul","jain","dosi","engineer"];
let newOne = str.map((str)=> str.toUpperCase())
console.log(newOne);


/*
Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled
 */

