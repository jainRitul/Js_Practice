let url ="https://catfact.ninja/fact";
let btn = document.querySelector('button');

btn.addEventListener("click" , async()=>{
    let fact = await getFact();
    console.log(fact);

    let p =document.querySelector('p');
    p.innerText = fact;
})
async function getFact(){
    try{
      let res = await axios.get(url);
      return res.data.fact;
    }
    catch(err){
        console.log(err);
        return "No fact found";
    }
}