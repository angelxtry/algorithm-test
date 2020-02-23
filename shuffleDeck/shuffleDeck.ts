const makeOrderedDeck = (): string[] => {
  const suits = ['S', 'D', 'C', 'H'];
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return suits.reduce<string[]>(
    (acc, s) => [...acc, ...values.map(v => `${s}${v}`)],
    []
  );
};

// const shuffleDeck = (deck: string[]): string[] => {
//   const result: string[] = [];
//   const length = deck.length;
//   for (let i = 0; i < length; i += 1) {
//     const chosen = Math.floor(Math.random() * deck.length);
//     result.push(deck.splice(chosen, 1)[0]);
//   }
//   return result;
// };

const shuffleDeck = (deck: string[]): string[] => {
  let temp = '';
  let deckLength = deck.length;
  while(deckLength) {
    const chosen = Math.floor(Math.random() * deckLength);
    deckLength -= 1;
    temp = deck[chosen];
    deck[chosen] = deck[deckLength];
    deck[deckLength] = temp;
  }
  return deck;
};

console.log(shuffleDeck(makeOrderedDeck()));
