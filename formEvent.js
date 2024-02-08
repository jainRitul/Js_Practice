let fo = document.querySelector("form");

fo.addEventListener("submit",function(event){
    //it prevent from default action of going to /action page and print form submitted on console
    event.preventDefault();
    console.log("Form submitted");
})




//how to take the value in input
fo.addEventListener("submit",function(event){

    event.preventDefault();
    let inp = document.querySelector("input");

    console.log(inp);
    console.dir(inp);
    console.log(inp.innerText);
    console.log(inp.value);
})




fo.addEventListener("submit",function(event){
    event.preventDefault();
   
    let use = document.querySelector("#user");
    console.log(use.value);
    let use1 = this.elements[0];
    console.dir(use1);
    

    let pas = document.querySelector("#pass")
    console.log(pas.value);

    alert(`Hi ${use} your password is set to ${pas}`);
})