let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
})

let user = document.querySelector("#user");
user.addEventListener("change" , function(){
    console.log("Change event");
    console.log("Input is:", this.value);
})
user.addEventListener("input" , function(){
    console.log("Input event");
    console.log("Input is:", this.value);
})



//store the thing in a para
let p =document.querySelector("p");
let inp = document.querySelector("#text");
inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText = inp.value;
    console.log(p);
})