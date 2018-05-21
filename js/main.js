console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    }
    else {
      console.log("Sorry, try again.");
    }
}

var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);

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
