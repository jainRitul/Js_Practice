const student = {
  name : "Ritul",
  marks : 99,
  prop : this,//global scope
  getName : function(){//calling obj
     console.log(this);
     console.log(this.name);
  },
  getMarks : () =>{ //parent's scope - window
     console.log(this);
     console.log(this.marks);
  },
  getInfo1: function(){ //it will print student obj because lexical scope for arrow function is simple function in info1 ,simple function have the scope of student
    
    setTimeout(() => {
      console.log(this);
    },2000);

  },
  getInfo2: function() { // it will print window obj beacuse calling obj for setTimeout is window
    setTimeout(function(){
      console.log(this);
    },2000);

  }


  
};