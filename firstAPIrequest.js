let url = "https://catfact.ninja/fact";

fetch(url)
.then((response)=>{
    // console.log("request accepted");
    // console.log("response is :" ,response);
    return response.json();
})
.then((data)=>{
    console.log("data1 : ",data.fact);
    return fetch(url);
})
.then((res)=>{
    // console.log(res);
    return res.json();
})
.then((data)=>{
    console.log("data2 : " ,data.fact);
})
.catch((err)=>{
   console.log("Error is :" , err);
})

console.log("I am happy");