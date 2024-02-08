let gameSeq  = [];
let userSeq  = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red","yellow","blue","green"];


document.addEventListener("keypress",function(){
    if(started == false){
            started = true;    
            console.log("Button pressed");

            levelUp();
    }
})


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random no generate for button flash 
    let randIdx = Math.floor(Math.random() * 4);
    let randColor  = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIdx);
     
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}
function checkAns(idx){
    // console.log(`curr level : ${level} ` );
    
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length === gameSeq.length)
       {
          setTimeout(levelUp,1000);
       }
    }
    else{
       h2.innerHTML = `Game Over ! Your score was <b>${level}</b> <br/> press any key to restart`;
       document.querySelector("body").style.backgroundColor = "red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
       },150)
       reset();
    }
}
function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length -1 );

}

let allBtns = document.querySelectorAll(".btn");
for(bt of allBtns){
    bt.addEventListener("click",btnPress);
}

function reset(){
    started = true;
    gameSeq = [];
    userSeq = [];
    level = 0;

}