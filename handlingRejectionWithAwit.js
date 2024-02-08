let h1 = document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            let rand = Math.floor(Math.random() * 5) + 1;
            if(rand > 3){
                reject("promise rejected")
            }
            h1.style.color = color;
            console.log("color changed to :" , color);
            resolve("promise resolved") 
        },delay)

    })
}
//try and catch used to handle rejections
async function demo(){
   try{
   await changeColor("green",1000);
   await changeColor("red",1000);
   await changeColor("purple",1000);
   await changeColor("blue",1000);
   }
   catch(err){
    console.log(err);
    console.log("error caught");
   }
   let a = 3;
   console.log(a);
}