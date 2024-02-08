console.log("No from 1 to 10");
for(let i=0;i<=10;i++)
console.log(i);


//10 to 1
console.log("No from 10 to 1");
for(let i=10;i>=1;i--)
console.log(i);

//odd no bet 1 to 15
console.log("Odd no between 1 to 15");
for(let i=1;i<=15;i+=2){
    console.log(i);
}

//even no bet 2 to 10
console.log("Even no between 2 to 10");
for(let i=2;i<=10;i+=2){
    console.log(i);
}

//Infinite loop
// for(let i = 0; ;i++)
// console.log(i);

//Multiplication table of 5
console.log("Table of 5");
for(let i = 1;i<=10;i++)
console.log(i*5);


//Table of any no
console.log("Enter a no on prompt for table of your choice");
let n = prompt("Enter a number")
n = parseInt(n)
for(let i=1;i<=10;i++)
console.log(i*n);

//While Loop
console.log("While LOOP");
let i =0;
while (i<=20) {
    console.log(i);
    i=i+2;
}

//Loops for traversal of array
let engineer = ["Software","Civil","Electrical","Mechanical"]
for(let i=engineer.length-1;i>=0;i--)
console.log(i,engineer[i]);


//Loops for Nested Array
console.log("Loops for Nested Array");
let fruits = [["Jain","Shah","Panchori","Dosi"],["Ghodha","Bhuta","Mehta","Bhardha"]]
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
    for(let j=0;j<fruits[0].length;j++){
        console.log(`j=${j} , ${fruits[i][j]}`);
    }
    console.log()
}


//Student INfo

let Student = [["Sarvesh",96],["Ritul",98],["Prinjal",94]];
for(let i=0;i<Student.length;i++){
    console.log(`Info of studnet no ${i+1}`);
    for(let j =0;j<Student[i].length;j++){
        console.log(Student[i][j]);
    }
}


//For Of Loop
let lang = ["c++","java","python"]
for(l of lang)
console.log(l);


//Nested for of loop
for(fruit of fruits)
{   console.log(fruit);
    for(item of fruit){
        console.log(item);
    }
}