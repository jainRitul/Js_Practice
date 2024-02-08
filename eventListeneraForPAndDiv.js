//keyboard event
let inp = document.querySelector("input");

// inp.addEventListener("keydown",function(){
//     console.log("key pressed");
// })
inp.addEventListener("keyup",function(event){

    // console.log("key:" ,event.key);
    console.log("event:", event.code);
    if(event.code == "KeyU"){
        console.log("Characte moves up");
    }
    else if(event.code == "KeyD"){
        console.log("Characte moves down");
    }
    else if(event.code == "KeyR"){
        console.log("Characte moves right");
    }
    else if(event.code == "KeyL"){
        console.log("Characte moves left");
    }
    
})


// let p = document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("This is an para");
// })

// let div = document.querySelector("div");
// p.addEventListener("mouseenter",function(){
//     console.log("This is an div");
// })

// //event listener this keyword in place of callback will refer to curr element which will call 

// let btn = document.querySelector("button");

// function changeColor(){
//    console.dir(this);
//    console.log(this.innerText);
   
//    this.style.backgroundColor  = "violet";
// }   

// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// div.addEventListener("click",changeColor);


// //keyBoard Event
// console.log("Keyboard event");
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// })