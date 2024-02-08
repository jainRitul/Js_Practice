//async normal fun

async function greet(){
    // throw("404 error page not found")
    return "hello ! ";
}
greet()
.then((result) =>{
    console.log("Code executed");
    console.log(result);
})
.catch((err) =>{
    console.log("error occured");
    console.log(err);
})

//async with arrow fun
let arrowWithasync = async() =>{
    
    return "hii";
}


//await
function getNum(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
         let rand = Math.floor(Math.random() * 10) + 1;

         console.log(rand);
         resolve();
        },1000);
    })
}

async function getNUMByAnother(){
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  await getNum();
    
}
n

//let's change color of text with awit and async
let h1 = document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           h1.style.color = color;
           console.log(`${color} is prinited`);
           resolve("color changed");
        },delay);
    })
}
async function demo(){
  await changeColor("green",1000);
  await  changeColor("purple",1000);
  await  changeColor("pink",1000);
  changeColor("yellow",1000);
}