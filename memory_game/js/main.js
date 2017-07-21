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

if(cardsInPlay.length === 2){
  if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
    alert("You found a match! Click New Game to reset.");
    // remove event listener from other cards
    var dom = document.getElementsByTagName('img');
    console.log(dom);
    for(i = 0; i < dom.length; i++){
      var cardRank = cards[i].rank;
      var cardSuit = cards[i].suit;
      console.log("card rank: " + cardRank + " suit: " + cardSuit);
      for(i = 0; i < cardsInPlay.length; i++){ // card is not in play
        var cardRank2 = cardsInPlay[i].rank;
        var cardSuit2 = cardsInPlay[i].rank;
        if(cardRank !== cardRank2 && cardSuit !== cardSuit2){
          console.log("card not in play (rank): " + cardRank2.rank) +
          "card not in play (suit): " + cardRank2.suit;
          var rm = cards[i];
          // remove event listener if card is not in play
          rm.removeEventListener('click', flipCard);
          console.log(rm);
        }
      }
    }
} else { //no match found
  alert("Sorry, try again.");
  location.reload();
}
}
// cardsInPlay.length >= 3
else if (cardsInPlay.length >= 3){
  alert("Refresh page");
}
}

var flipCard = function(){
  this.removeEventListener('click', flipCard);
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId]);
  this.setAttribute("src", cards[cardId].cardImage);

  if(cardsInPlay.length === 2){
    return setTimeout(checkForMatch, 200);
  } else{
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

var reload = function(){

}

createBoard();
