//json to js
let jsonRes = '{"fact":"When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.","length":97}'
console.log(jsonRes);

let userRes = JSON.parse(jsonRes);
console.log(userRes);


//js to json
let obj = {
    name :"Ritul",
    age : 19
}
console.log(JSON.stringify(obj));


