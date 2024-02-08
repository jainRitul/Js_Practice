//getElementsByClassName
let smallImg = document.getElementsByClassName("o_i");
for(let i=0;i<smallImg.length;i++){
    // smallImg[i].src = "rose.jpg"
    console.log(`src of ${i} is changed `);
}

//querySelector in js 
console.dir(document.querySelector('p'));
console.dir(document.querySelector('img'));
//can also select all ocurences of an element
console.dir(document.querySelectorAll('img'));
console.dir(document.querySelector('.o_i'));



//manipulating attributes
let img = document.querySelector('img')
console.dir(img);
console.dir(img.getAttribute('img','rose'));


//innerHTML,innerText,textContent
const para = document.querySelector('p');
console.dir(para.innerHTML);
console.dir(para.innerText);
console.dir(para.textContent);


//style in js 
let link = document.querySelectorAll(".images a");
for(let i =0 ;i<link.length;i++){
    link[i].style.color = "yellow";
}
//using for of loop
for(li of link){
    li.style.color = "green";
}



//prac question
let p = document.createElement('p');
p.innerText = "Hey ! I am red";
let body = document.querySelector('body');
body.append(p);
p.classList.add('red')

let h3 = document.createElement('h3');
h3.innerText = "Hey ! I am blue";
body.append(h3);
h3.classList.add('blue')

let div = document.createElement('div');
body.append(div);
div.classList.add('divP')
let h1 = document.createElement('h1')
h1.innerText = "Hi i am h1 in div"
let p2 = document.createElement('p')
p2.innerText ='hii i am p in div'
div.appendChild(h1)
div.appendChild(p2)






