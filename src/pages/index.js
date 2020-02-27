import React, { useState } from 'react'
import Deck from '../mechanics/deck';
import PlayingArea from '../components/Deck';

export default () => {
  const [deck, setDeck] = useState(new Deck());
  console.log(deck);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Play Montana</h1>
      <PlayingArea deck={deck}/>
    </div>
  );
}
