//avg of an array using arrow function
let arr = [2,4]
let arrayAvg = (arr)=>{
    let average = 0;
    let sum =0;

    for (let i =0;i<arr.length; i++){
       sum += arr[i]; 
    }
    average = sum/arr.length;
    return average;
}


//find no is odd or even
let num = 4;
let evenOrOddCheck = (num)=>{
    if(num % 2==0)
        console.log("even");
    else
        console.log("odd");
    
}


//question no 4
let obj = {
    message : "Ritul Jain",
    logMessage() {
      console.log(this.message);
    }
    
}
setTimeout(obj.logMessage,4000)


//question no5
let length = 5;
function callBack(){
   console.log(length);
}
const object = {
    length : 5,
    method(callBack){
        callBack();
    },

}

object.method(callBack);