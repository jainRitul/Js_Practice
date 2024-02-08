let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed")
        }, delay);
    })
}

changeColor("green" , 1000)
.then(()=>{
    console.log("color changed to green");
    changeColor("yellow",1000);
})
.then(()=>{
    console.log("color changed to yellow");
    changeColor("pink",1000);
})
.then(()=>{
    console.log("color changed to pink");
    changeColor("violet",1000);
})
.then(()=>{
    console.log("color changed to violet");
   
})