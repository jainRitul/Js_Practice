//print the larger num in arr than given num
let num =3;
let arr = [1,2,4,2,9];
for(let i= 0;i<arr.length;i++){
    if(arr[i] > num){
    console.log(arr[i]);
    
    }
}


//find the unique char from str 
let str = "abcdefghefghabcsd"
let ans = ""
function uniqueChar(str){
  for(let i =0;i<str.length;i++){
    let charAtI = str[i];
    if(ans.indexOf(charAtI) == -1){
        ans += charAtI;
    }
  }return ans;
}
uniqueChar(str);



//longest country name in an array if countries
let country = ["India","USA","China","Pak","Uk"];
function checkLongestCountryName(country){
    let ans = "";
    for (let i = 0;i<country.length; i++) {  
            
       if(ans.length < country[i].length){
         ans = country[i];
       }

    }
    return ans;
}


//find the no of vowels in string
let str1 = " hii ,Ritul Jain "

function findVowelsInStr(str1) {
    let count = 0;
    for(let i =0;i<str1.length;i++){
        let charAtI = str1[i];
        if(charAtI == 'a' || charAtI == 'e' || charAtI == 'i' || charAtI =='o' || charAtI =='u'){
            count++;
        }
    }
     console.log(count);
}
findVowelsInStr(str1)


//random number between a range of start
let start = 100;
let end = 200;
function generateRandom(start,end) {
        let diff = end - start;
        alert(Math.floor(Math.random() * diff)+start);
}
generateRandom(start,end);


