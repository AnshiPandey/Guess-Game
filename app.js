let maximum  = parseInt(prompt("Welcome! Enter your max number:"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum= Math.floor(Math.random() * maximum) +1;

let attempts = 1;
let guess =prompt("Enter your first guess! (Type 'q' to quit)");

while( parseInt(guess) !== targetNum) {
    if( guess === 'q') break;
    guess = parseInt(guess);
    
    if (guess > targetNum) {
        guess =prompt("Too high! Enter a new guess:");
        attempts ++;
    } else if(guess < targetNum) {
        guess =prompt("Too low! Enter a new guess:");
        attempts ++;}
        else{
            guess = prompt("Invalid guess. Please try again:");
        }
}
 const myList = document.querySelector("#newEl");
    const newList= document.createElement("h2");

if (guess === 'q') {
    newList.textContent ="OK, YOU QUIT!";
    myList.appendChild(newList);
}
else{ 
    newList.innerText = `CONGRATS YOU WIN!
    
    You got it! It took you ${attempts} guesses`;
    myList.appendChild(newList)
}
newList.classList.add("newEle");
