const draw1 = "http://deckofcardsapi.com/api/deck/new/draw/?count=1";

const draw2 = "http://deckofcardsapi.com/api/deck/new/draw/?count=2";

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

function printCards(cards, player) {
  let drawCards = cards.cards;
  for (let i = 0; i < drawCards.length; i++) {
    const cardImg = document.createElement("img");
    cardImg.src = drawCards[i].image;
    cardImg.classList.add("cards");

    if (player === "Player") {
      const cardBody = document.getElementById("playerBody");
      cardBody.append(cardImg);

      if (parseInt(drawCards[i].value)) {
        yourTotal += parseInt(drawCards[i].value);
      } else if (drawCards[i].value === "ACE") {
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

      if (parseInt(drawCards[i].value)) {
        dealerTotal += parseInt(drawCards[i].value);
      } else if (drawCards[i].value === "ACE") {
        dealerTotal += 11;
      } else {
        dealerTotal += 10;
      }
      if (dealerTotal > 21) {
        passedNumber("Dealer");
      }
      document.getElementById("dealerScore").innerHTML = dealerTotal;
    }
  }
}

async function dealerHit() {
  try {
    const posts = await fetchCards(1);

    printCards(posts, "Dealer");
  } catch (err) {
    console.log(err);
  }
}

async function playerHit() {
  try {
    const posts = await fetchCards(1);

    printCards(posts, "Player");
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
