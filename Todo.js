let todo = []
let req = prompt("Enter your request")

while (true) {
    if(req == 'quit')
    {
        console.log("You choose you quit the game");
        break;
    }
    if(req == 'list'){
        console.log("-------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-------------");
    }
    else if(req == 'add'){
        let task = prompt("Enter item to add in list")
        todo.push(task)
        console.log("Task added");
    }
    else if(req == 'delete'){
        let n = prompt("Enter the no to delete a task")
        todo.splice(n,1)
        console.log("task deleted");
    }
    else{
        console.log("Enter a valid work");
    }
    req = prompt("please enter new request");
}