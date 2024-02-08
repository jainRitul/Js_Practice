let greet = function(){
    console.log("Namsate");
}
function multipleGreet(func,count)//higher order fun which takes another fun as an arguments
{
    for(let i =0;i<=count;i++){
        func();
    }
}
multipleGreet(function(){console.log("Hello");},6);



