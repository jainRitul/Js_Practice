function print(...args){
    for(let i=0;i<args.length;i++)
    {
        console.log("you gave us " + args[i]);
    }
}


//sum with rest
function sum(...args)
{
   return args.reduce((res,el) => res+el);
}


//Destructuring
let participants = ["ritul","prinjal","heta","mahi"];
let [winner,runnerup,secondRunnerUp,...others] = participants;
console.log(winner);
console.log(runnerup);


//Destructring of obj
const data = {
    name :"Ritul",
    clas : 12,
    roll : 21020,
    sub :["hindi","eng","math"],
    
}
let {name : user , clas, city:place ="Mumbai"} = data;

