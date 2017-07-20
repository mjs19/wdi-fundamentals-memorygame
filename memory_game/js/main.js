// this is a comment in JS

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
  if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}
}

var flipCard = function(cardId){
  // card Id will be an index from the cards array
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);

  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  if(cardsInPlay.length === 2){
    return checkForMatch();
  }
}

flipCard(0);
flipCard(2);
