class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here

    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    let i = this.cards.length;
    while (--i > 0) {
      let temp = Math.floor(Math.random() * (i + 1));
      [this.cards[temp]], (this.cards[i] = [this.cards[i], this.cards[temp]]);
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here

    if (card1 && card2) {
      this.pairsClicked++;
    }
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}