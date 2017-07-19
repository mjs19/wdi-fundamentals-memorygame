var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}

var flipCard = function(cardId){
  // card Id will be an index from the cards array
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);

  if(cardsInPlay.length === 2){
    return checkForMatch();
  }
}

flipCard(0);
flipCard(2);
