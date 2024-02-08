//Question no 1
let arr = [1,3,2,4,3,3,4,0,5,0];
let numToBeDeleted = 0 ;
for (let index = 0; index < arr.length; index++) {
    if(arr[index] == numToBeDeleted)
    arr.splice(index,1);
}
console.log(arr);


//Question no 2
//Count no of digit in number
let num = 2434341;
let count  = 0;
// let copy = num;
while (num>0) {
    
    count++;
    num = Math.floor(num/10);
    // copy = Math.floor(copy/10);

}
console.log(count);


//Question no 3
//Sum of digit in a number
let num1 = 545;
let sum = 0;
while (num1>0) {
    sum+=num1%10;
    num1 = num1/10;
}
console.log(sum);



//Question no 4
let n = 5;
let fact = 1;
for(let i=2;i<=n;i++){
    fact *=i;
}
console.log(fact);

//Largest no in array
let a = [3,99,4,100,459];
let max = a[0];
for(let i=1;i<a.length;i++){
    if(max < a[i]){
        max = a[i];
    }
}
console.log(`Max element in array is : ${max}`);