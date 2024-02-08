let student = {
   name : "Ritul Jain",
   age : 19,
   father_name : "Sandeep Jain",
   math : 99,
   eng : 100,
   hindi :88,
   getAvg(){
    let avg = (this.math + this.eng + this.hindi)/3;
    console.log(avg);
   }

};
let avg = function(){
    console.log(this);
}