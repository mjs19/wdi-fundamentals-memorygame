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
    alert("You found a match!");
    // remove event listener from other cards
    var dom = document.getElementsByTagName('img')
    for(i=0; i<dom.length; i++){
      var index = document.getElementsByTagName('data-id');
      if (cardsInPlay.indexOf(index) === -1){
        dom[i].removeEventListener('click', flipCard);
      }
    }
    //location.reload();

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





createBoard();
