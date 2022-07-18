const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
];   

let input=document.getElementById("movie-input");
let submitButton = document.getElementById("submit-button");
let hintButton = document.getElementById("hint-button");
let movieDesc = document.getElementById("description");
let hintDesc = document.getElementById("hint");
let guesserBody= document.getElementById("guess-result")

function generateNumber(){
    return Math.floor(Math.random()*11);
};

var randomNumber=generateNumber();
var movie=movies[randomNumber];


movieDesc.innerHTML=movie.explanation;

submitButton.addEventListener("click",()=>{
    let guess=input.value;

    if(guess==movie.title){

        // Create alert 
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = "Your guess is correct. The movie was "+movie.title+".";
        resultDiv.classList.add('alert');
        resultDiv.classList.add('alert-primary');
        resultDiv.classList.add('mt-4');


        // Create Play again button
        const playAgain = document.createElement("button");
        playAgain.innerHTML="Play Again";
        playAgain.classList.add("btn");
        playAgain.classList.add("btn-secondary");
        playAgain.classList.add("playAgain");

        guesserBody.innerHTML=""

        resultDiv.append(playAgain);
        guesserBody.append(resultDiv);

        // Option to play again
        let playAgainButton=document.getElementsByClassName("playAgain")[0];

        playAgainButton.addEventListener("click",()=>{
            guesserBody.innerHTML="";
            randomNumber=generateNumber();
            movie=movies[randomNumber];
            movieDesc.innerHTML=movie.explanation;
            hintDesc.textContent="";
        });

    }else{
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = "Your guess is incorrect.";

        guesserBody.innerHTML=""

        resultDiv.classList.add('alert');
        resultDiv.classList.add('alert-primary');
        resultDiv.classList.add('mt-4');
        guesserBody.append(resultDiv);
    }
    input.value="";
});

hintButton.addEventListener("click",()=>{
    hintDesc.textContent=movie.hint
});