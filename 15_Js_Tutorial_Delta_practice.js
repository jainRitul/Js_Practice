//Question no 1
let num = 1;
if(num%10 == 0)
console.log("Good");
else
console.log("Bad");

//Question no2
let name = prompt("Enter your name");
let age = prompt("Enter your age");
alert(`${name} is ${age} years old`);


//Question no 3
let Quarter = 2

switch (Quarter) {
    case 1:
        console.log("Jan,Feb,Mar,Apr");
        break;
    case 2:
        console.log("May,June,July,Aug");
        break;
    case 3:
        console.log("Sep,Oct,Nov,Dec");
        break;
    default:
        console.log("Not a valid quarter");
        break;
}


//Question no 4
//Golden String
let Str = "Ritul Jain"
if(Str[0] == 'A' || Str[0] == 'a' && Str.length>5)
console.log("Golden String");
else{
    console.log("Not a golden string");
}

//Question no 5
//largest of three no
let a = 2
let b = 9
let c = 9
if( a > b && a > c){
    console.log("a is greater");
}
else if(b>a && b>c){
    console.log("b is greater");
}
else if(c>a && c>b){
    console.log("c is greater");
}
else {
    console.log("All are equal");
}

//Question no 6
//Two number have same last digit
let num1 = 32
let num2 = 323
if(num1%10 == num2%10)
console.log(num2%10);
else
console.log("Both have different last digit");