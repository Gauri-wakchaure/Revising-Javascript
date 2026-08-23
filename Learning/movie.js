let favourite="Mismatched";

let guess=prompt("Enter Movie Name");
while((guess!=favourite) && (guess!='quit'))
{
    guess=prompt("Wrong Guess. Please Try Again");
}

if(guess==favourite){
    console.log("Congrats!!");
}else{
    console.log("You Quit");
}