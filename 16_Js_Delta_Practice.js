//Question no 1
let arr = [10,3,2,3];
let n = 2;
for(let i=0;i<n;i++)
console.log(arr[i]);
//we can do the same thing with slice
let ans = arr.slice(0,n)
console.log(ans);


//Question no 2
let arr1 = [1,2,3,4]
let n1 = 2
let ans1 = arr1.slice(arr1.length - n1);
console.log(ans1);


//Question no 3
let str = ""
if(str.length != 0 )
console.log("String is not empty");
else
console.log("String is empty");


//Question no 4
let str2 = prompt("Enter a string")
let idx = 3
if(str2[idx] == str2[idx].toLowerCase())
console.log("At this index character is lower case");
else
console.log("Character is not lower case");



//Question no 5
let name = "                  Ritul Jain              "
console.log(name.trim());


//Question no 6
let array = ["Ritul"  , 8.47 , 19 ]
let item = 1
if(array.indexOf(item)!=-1)
console.log("Element is present in array");
else
console.log("ELement is not present in array");