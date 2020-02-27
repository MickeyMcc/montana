import React from 'react';
import Card from './card';

class Deck {
    constructor() {
        this.deck = []
        this.create();
        this.shuffle(); 
        this.display();       
    }

    create() {
        for (let num = 1; num <= 13; num++) {
            for (let suit = 1; suit <= 4; suit++) {
                this.deck.push(new Card(num, suit));
            }
        }
    }

    shuffle() {
        for (let i = 0; i < 52; i++) {
            const newIndex = Math.floor(Math.random() * 52);
            const placeholder = {...this.deck[i]};
            this.deck[i] = {...this.deck[newIndex]};
            this.deck[newIndex] = placeholder;
        }
    }

    display() {
        this.layout = [[new Card()],[new Card()],[new Card()], [new Card()]];
        this.deck.forEach((card, i) => {
            console.log(Math.floor(i / 13))
            this.layout[Math.floor(i / 13)].push(card);
        });
    }
}

export default Deck;
