let submitBtn=document.getElementById("submit-span");
let numberGuess=document.getElementById("number-input");
let guesserBody=document.getElementById("result-body");

function generateNumber(){
    return Math.floor(Math.random()*11);
};

var randomNumber=generateNumber();




submitBtn.addEventListener("click",()=>{
    
    let guess=numberGuess.value;
    if(guess==randomNumber){
        const resultDiv = document.createElement('div');
        const playAgain = document.createElement("button");
        resultDiv.innerHTML = "Your guess is correct. The random number was "+randomNumber+".";
        
        resultDiv.classList.add('alert');
        resultDiv.classList.add('alert-primary');
        resultDiv.classList.add('mt-4');

        playAgain.innerHTML="Play Again";
        playAgain.classList.add("btn");
        playAgain.classList.add("btn-secondary");
        playAgain.classList.add("playAgain");

        guesserBody.innerHTML=""

        resultDiv.append(playAgain);
        guesserBody.append(resultDiv);

        let playAgainButton=document.getElementsByClassName("playAgain")[0];

        playAgainButton.addEventListener("click",()=>{
            guesserBody.innerHTML="";
            randomNumber=generateNumber();
        });

    }
    else if(guess<randomNumber){
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = "Your guess is incorrect. Go higher";

        guesserBody.innerHTML=""

        resultDiv.classList.add('alert');
        resultDiv.classList.add('alert-primary');
        resultDiv.classList.add('mt-4');
        guesserBody.append(resultDiv);
    }
    else if(guess>randomNumber){
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = "Your guess is incorrect. Go lower";

        guesserBody.innerHTML=""

        resultDiv.classList.add('alert');
        resultDiv.classList.add('alert-primary');
        resultDiv.classList.add('mt-4');
        guesserBody.append(resultDiv);
    }

    numberGuess.value="";
}); 

