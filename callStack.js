function one(){
    return 1;

}
function two()
{
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}
three();

//javascript is synchronous nature lang to make mtlb ki ek time p  ek kmm pr asynchronour banane k liye hum browser ki help lete h
//jaise ki setTimeout jo h vo js browser ko dedeti h ki tu wait kr tb tk m dusra km krti hu
//or jb time finish hojata h settimout ka toh js browser s leke excute krva deti
// setTimeout(()=>{
//     console.log("Ritul Jain");
// },1000)


// console.log("Hello from ");



//callBack hell

let h1 = document.querySelector("h1");


function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color =color;
        if(nextColorChange) nextColorChange();

    },delay);

}

changeColor("green" , 1000,()=>{
    changeColor("pink",1000,()=>{
        changeColor("blue",1000,()=>{
          changeColor("black",1000);
        });
    });
});



//one more callback hell

function saveToDb(data,success,failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed >  4){
       success();
    }
    else{
       failure();
    }
}

saveToDb("ritul" , ()=>{
    console.log("Data saved successfully ");
    saveToDb("jain",()=>{
        console.log("data2 saved");
    },() =>{
        console.log("weak connection data2 not saved");
           })
},()=>{
    console.log("weak connection");
})



//preventing callback hell by promises
function saveToDb(data){
    return new Promise((resolve ,reject) => {
       let internetSpeed = Math.floor(Math.random() * 10) + 1;
       if(internetSpeed >  4){
        resolve("success : data saved");
       }
       else{
        reject("data not saved");
       }
    })
}
saveToDb("ritul jain").then(() =>{
   console.log("saved");
  
})
.catch(() =>{
   console.log("not saved");
   
})


//first approch
saveToDb("ritul jain").then(() =>{
    console.log("saved data 1");
    saveToDb("dosi").then(()=>{
        console.log("data 2 saved");
    })
})
.catch(() =>{
    console.log("not saved");
})


//second approach

saveToDb("ritul jain").then((result)=>{
    console.log(result);
    console.log("data 1 saved");
    return saveToDb("dosi");
}).then((result) =>{
    console.log(result);
    console.log("data2 saved");

})
.catch((error) =>{
    console.log(error);
    console.log("weak conncetion");
})