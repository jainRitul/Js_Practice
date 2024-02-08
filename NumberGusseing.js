const max  = prompt("Enter the max value")

const random = Math.floor(Math.random() * max) + 1

let guess = prompt("Enter your guess");
while(true){
    if(guess == "quit")
    {
        console.log("You quit the game ");
        break;
    }
    if(guess == random)
    {
        console.log("You guessed it right , congrats! . Number is " + random);
        break;
    }
    else if(guess > random)
        guess = prompt("you entered too large no , please try it again")
    else
        guess = prompt("you entered too small no  ,please try it again")
    
}
