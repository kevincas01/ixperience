var deckId=""

var draw1 = "http://deckofcardsapi.com/api/deck/<<"+deckId+">>/draw/?count=1";
var draw2 = "http://deckofcardsapi.com/api/deck/<<"+deckId+">>/draw/?count=2";


async function fetchCards(num) {
    const response = await fetch(draw1, {
      method: "GET",
    });
    return response.json();
  }
  

var yourTotal = 0;
var dealerTotal = 0;

var pStand = false;
var dStand = false;

var cardsLeft=0;

function printCards(cards, player) {
  let drawCards = cards.cards;
  console.log(cards);
    const cardImg = document.createElement("img");
    cardImg.src = drawCards[0].image;
    cardImg.classList.add("cards");

    if (player === "Player") {
      const cardBody = document.getElementById("playerBody");
      cardBody.append(cardImg);


      if (parseInt(drawCards[0].value)) {
        yourTotal += parseInt(drawCards[0].value);
      } else if (drawCards[0].value === "ACE") {
        yourTotal += 11;
      } else {
        yourTotal += 10;
      }
      if (yourTotal > 21) {
        passedNumber("Player");
      }
      document.getElementById("yourScore").innerHTML = yourTotal;
    } else {
      const cardBody = document.getElementById("dealerBody");
      cardBody.append(cardImg);

      if (parseInt(drawCards[0].value)) {
        dealerTotal += parseInt(drawCards[0].value);
      } else if (drawCards[0].value === "ACE") {
        dealerTotal += 11;
      } else {
        dealerTotal += 10;
      }
      if (dealerTotal > 21) {
        passedNumber("Dealer");
      }
      document.getElementById("dealerScore").innerHTML = dealerTotal;
    }
    cardsLeft=cards.remaining
  
}

async function dealerHit() {
  try {
    const posts = await fetchCards(1);
    
    printCards(posts, "Dealer");
  } catch (err) {
    console.log(err);
  }
}

async function playerHit(num) {
  try {
    const posts = await fetchCards(num);

    printCards(posts, "Player");
  } catch (err) {
    console.log(err);
  }
}

const deckUrl="http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

async function fetchDeck() {
    const response = await fetch(deckUrl, {
      method: "GET",
    });
    return response.json();
  }

async function drawDeck() {
    try {
      const posts = await fetchDeck();
        
        if(cardsLeft<15){
        deckId=posts.deck_id;
        draw1="http://deckofcardsapi.com/api/deck/"+deckId+"/draw/?count=1";
        }
        

        playGame();
    } catch (err) {
      console.log(err);
    }
  }



function playGame() {
  document.getElementById("results").style.display = "none";
  document.getElementById("playGame").style.display = "none";
  document.getElementById("gameStart").style.display = "block";
  document.getElementById("playerTurn").style.color = "red";

  playerHit();
  playerHit();

  dealerHit();
}

function playerStand() {
  document.getElementById("playerTurn").style.color = "black";
  document.getElementById("dealerTurn").style.color = "red";
}
function dealerStand() {
  if (yourTotal === dealerTotal) {
    document.getElementById("results").innerHTML =
      "<h2>There was a tie. Noone won!</h2>";
  } else if (yourTotal > dealerTotal) {
    document.getElementById("results").innerHTML =
      "<h2>The dealer lost. Player Wins!!</h2>";
  } else {
    document.getElementById("results").innerHTML =
      "<h2>The player lost. Dealer Wins!!</h2>";
  }
  resetGame();
}

function resetGame() {
  document.getElementById("playGame").style.display = "block";
  document.getElementById("gameStart").style.display = "none";
  document.getElementById("results").style.display = "block";
  document.getElementById("dealerBody").innerHTML = "";
  document.getElementById("playerBody").innerHTML = "";
  document.getElementById("dealerScore").innerHTML = "";
  document.getElementById("yourScore").innerHTML = "";
  document.getElementById("playerTurn").style.color = "black";
  document.getElementById("dealerTurn").style.color = "black";

  yourTotal = 0;
  dealerTotal = 0;
}

function passedNumber(player) {
  resetGame();

  document.getElementById("results").innerHTML =
    player === "Player"
      ? "<h2>The player lost. Dealer Wins!!</h2>"
      : "<h2>The dealer lost. Player Wins!!</h2>";
}
