let square = (n)=> (n*n);

//practice question 
//setInterval
let id = setInterval(()=>{
    console.log("Hello world");
},2000)
//clearInterval afte 5 printing
setTimeout(()=>{
    console.log("clear interval");
    clearInterval(id);
   
},10000);