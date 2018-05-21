console.log("Up and running!");

var cards = [
{
  rank : "queen",
  suit : "hearts",
  cardImage : "images/queen-of-hearts.png"
},
{
  rank : "queen",
  suit : "diamonds",
  cardImage : "images/queen-of-diamonds.png"
},
{
  rank : "king",
  suit : "hearts",
  cardImage : "images/king-of-hearts.png"
},
{
  rank : "king",
  suit : "diamonds",
  cardImage : "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    }
    else {
      alert("Sorry, try again.");
    }
}

var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  checkForMatch();
}

flipCard(0);
flipCard(2);







/*
Create a function to store all steps that should happen when the user flips a card.
After the lines with the cards and cardsInPlay arrays, create a function flipCard.
The function should accept one parameter: cardId.
Move all the code that you wrote for the last unit's assignment,
except for the cards and cardsInPlay arrays into the flipCard function.
We are leaving the two arrays outside of the flipCard function
since we want to make sure that the two arrays have global scope.
*/
