function outerFunction() {
    let x =  4;
    let y = 5;
    function innerFun() {   //function scope
        console.log(x);
    }
    console.log();
    innerFun();
}

//functional expression
console.log(" ** functional expression ** ");
let sum = function (a,b){
   return a+b;
}
sum = function(name){
    return name;
}