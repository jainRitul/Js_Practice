const Student = {
   name :"Ritul",
   age : 19,
   hobbies : ["coding","music"],
   college : "Parul University"
};
console.log(Student);

// creating a post for twitter
const post = {
   username : "@rituljain",
   content :"This a content for javascript",
   likes : 134,
   repost : 4,
   tags : ["@jaintechub","@dosiStationers"]
};

//Get values 
//Obj.key
//obj["key"]
/*
let prop = obj["key"]
obj.prop


$$ let prop = obj.key // it will not work $$

 */


//Js takes all the keys as String 
const ex = {
    1 :'a',
    2:'b',
    null:"empty",
    undefined :"idk"
};

//Add and update in object
//Nested obj
const classInfo =  {
   Ritul :{
      company : "Google",
      package : 50
   },
   Prinjal :{
    company : "Facebook",
    package : 50
   },
   Harshit:{
    company : "Meta",
    package : 50
   }
};


//Array of objs
const company = [
    {
       name : "Ritul",
       age: 23
    },
    {
        name : "Prinjal",
        age: 23
    },
    {
        name : "harshit",
        age: 25
    }
];