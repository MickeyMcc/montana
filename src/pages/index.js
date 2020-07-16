import React, { useState } from 'react'
import DeckMechanics from '../mechanics/deck';
import PlayingArea from '../components/Deck';

export default () => {
  const [deck, setDeck] = useState(DeckMechanics.create());
  DeckMechanics.shuffle(deck)
  console.log(deck);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Play Montana</h1>
      <PlayingArea deck={deck}/>
    </div>
  );
}
