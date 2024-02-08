let url = "https://catfact.ninja/fact";

async function getFacts(){
   try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
    console.log(res);


    let res1 = await fetch(url);
    let data1 = await res1.json();
    console.log(data1.fact);
   }
   catch(e){
    console.log("error occured: " , e);
   }
   console.log("Ritul Jain");
}




//samething but with axios 
let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{

   let fact = await getFact();
   console.log(fact);
   let p = document.querySelector("#result");
   p.innerText = fact;

})
async function getFact(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } 
    catch(e){
        return "NO FACT FOUND"
       }
}       