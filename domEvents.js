let btn = document.querySelector("button");
console.dir(btn);
btn.onclick = function(){
    console.log("Button was clicked");
}
function sayHello(){
    console.log("Hello");
}
btn.onclick = sayHello;

//selecting all button
let btns = document.querySelectorAll("button");
//in onclick we can print only one message
//but by event listener we can print multiple messsge

for(bt of btns){

 bt.addEventListener("click",sayName)  ;
 bt.addEventListener("click",sayHello) ;

 //double click
 bt.addEventListener("dblclick",function(){
    console.log("You double clicked me!");
 }) ;


//  bt.onclick = sayHello;
//  bt.onclick = sayName;

//  bt.onmouseenter = function(){
//     console.log('you entered');
//  }

}

function sayHello(){
 console.log("Hello");
}

function sayName(){
 console.log("Namaste");
}
