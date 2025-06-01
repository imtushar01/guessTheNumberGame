let computerGuess;
let userGuess = [];
 
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");

const init = () => {
    computerGuess = Math.floor(Math.random()*100 + 1);
    // console.log(computerGuess);
    document.querySelector("#newGameButton").style.display = "none"
    document.querySelector("#gameArea").style.display = "none"
}

init();

const startGame = () => {
    document.querySelector("#welcomeScreen").style.display = "none";
    document.querySelector("#gameArea").style.display = "block";
    // userNumberUpdate.setAttribute("disabled", true); 
};

// newgamebegin
const newGameBegin = () => {
    window.location.reload();
}

// start new game

const startNewGame = () => {
    document.querySelector("#newGameButton").style.display = "inline"
}

// main logic for our app
const compareGuess = () => {
    const userNumber = Number(document.querySelector('#inputBox').value);
    userGuess = [...userGuess, userNumber];
    document.querySelector("#guesses").innerHTML = userGuess;

    //check the value
    if(userGuess.length < maxGuess){
        if(userNumber > computerGuess){
            userGuessUpdate.innerHTML = "Your guess is High 🙄";
            userNumberUpdate.value = "";
        }
        else if(userNumber < computerGuess){
            userGuessUpdate.innerHTML = "Your guess is Low 😐";
            userNumberUpdate.value = "";
        }
        else{
            userGuessUpdate.innerHTML = "It's Correct 😇";
            userNumberUpdate.value = "";
        }
    }
    else{
        if(userNumber > computerGuess){
            userGuessUpdate.innerHTML = `You Loose the correct ans was ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        }
        else if(userNumber < computerGuess){
            userGuessUpdate.innerHTML = `You Loose the correct ans was ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        }
        else{
            userGuessUpdate.innerHTML = "It's Correct 😇";
            userNumberUpdate.value = "";
            userNumberUpdate.setAttribute("disabled", true); 
            startNewGame();
        }
    }
    

    document.querySelector("#attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
    maxGuess = 10;
    startGame();
};

const hardMode = () => {
    maxGuess = 5;
    startGame();
}