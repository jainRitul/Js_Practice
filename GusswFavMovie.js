let Fav = "Jawan"
let guess = prompt("Enter a guess for fav movie")
while ((guess!=Fav)) {
    if(guess == "Quit"){
        console.log(("You Quit"));
        break;
    }
     guess = prompt("Enter a guess")
}
if(guess==Fav)
console.log("You guessed it right");
else
console.log("You quit");