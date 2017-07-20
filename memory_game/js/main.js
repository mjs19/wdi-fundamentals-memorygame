// game logic
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts_360.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds_360.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts_360.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds_360.png"
  }
];
var cardsInPlay = [];

var checkForMatch = function(){
  if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
    if(cardsInPlay[0].suit != cardsInPlay[1].suit){
      alert("You found a match!");
    }
    // same card was clicked twice. does not count as a match.
    else{
      alert("You clicked the same card twice! Try again.")
    }
// no match found
} else {
alert("Sorry, try again.");
}
}


var flipCard = function(){
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId]);
  this.setAttribute("src", cards[cardId].cardImage);

  if(cardsInPlay.length === 2){
    return setTimeout(checkForMatch, 200);
  }
}

var createBoard = function(){
  for(var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back_360.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();
