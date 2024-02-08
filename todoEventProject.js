let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
   
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete"
    delBtn.classList.add('delete')

   
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = ""
})

ul.addEventListener("click",function(event){
   
    if(event.target.nodeName = "BUTTON"){
        let list = event.target.parentElement;
        list.remove();
    }
})








// ul.addEventListener("click",function(event){
//     if(event.target.nodeName=="BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("deleted");
//     }
// });

//delte ko click krke item delte hojye
// let btns = document.querySelectorAll(".delete")
// for(btn of btns){

//     btn.addEventListener("click",function(){
//        let pare = btn.parentElement;
//        pare.remove();
//     })

// }