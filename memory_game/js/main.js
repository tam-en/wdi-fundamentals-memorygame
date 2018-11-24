
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

// cardOne represents the first card the user flips
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log('User flipped ' + cardOne + ' durn it.');

// cardTwo represents the second card the user flips
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log('User flipped ' + cardTwo + ' durn it again.');

//check whether two cards have been flipped, and if so, report match status.
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else {
		alert('Sorry, try again.');
	}
};

