function hello() {
    console.log("Helloooo");
}
hello();


//check adult or not
function isAdult(age){
    if(age >= 18)
    console.log("Adult");
    else
    console.log("Not Adult");
}
isAdult(19);

//print 1 to  5
console.log("** print 1 to 5 **");
function print1to5(){
    for (let i = 1; i <=5; i++) 
        console.log(i);
}
print1to5();

//Print name
console.log("** print name **");
function printName(Name) {
    console.log(Name);
}
printName("Ritul");


//RollDice program
console.log(" ** roll dice ** ");
function rollDice() {
    const rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}
rollDice();


//Average of three no
console.log("** avg of three no ** "); 
function avgOfThree(a,b,c) {

  let avg = (a+b+c)/3;
  console.log(avg);
    
}
avgOfThree(2,3,4);


//Multiplication table of any number
console.log("** Table ** ");
function MultiplicationTable(n) {
    for(let i =1; i <=10 ; i++){
        console.log(n*i);
    }
}
MultiplicationTable(2);



//Return keyword
console.log("**  Return keyword **");
function sum(a,b){
    return a+b;
}
console.log(sum(sum(1,2),3));


//Sum of 1 to n
console.log("** Sum of 1 to n **");
function sumOf1toN(n) {
    let sum = 0
    for(let i = 1 ; i<=n;i++){
       sum += i;
    }
    return sum;
}
console.log(sumOf1toN(5));


//concatenat the string in an array 
console.log("** concat the string in an array **");
let arr = ["Hi,","i am","Ritul Jain"]
function concatString(arr){
    let string = "";
    for(let i =0 ;i<arr.length;i++){
        
        string += arr[i];
        string += " ";
    }
    return string;
}
console.log(concatString(arr));