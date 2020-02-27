import React from 'react';

const suits = {
    1: 'Spades',
    2: 'Hearts',
    3: 'Clubs',
    4: 'Diamonds',
};

const names = {
    1: 'Ace',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Jack',
    12: 'Queen',
    13: 'King',
};

class Card {
    constructor(number, suit) {
        if (!number && !suit) {
            this.card = {
                name: 'space',
            }
        } else {
            this.card = {
                number,
                suit,
                name: `${names[number]} of ${suits[suit]}`,
            }
        }
        this.cardStyle = this.style();
    }

    style() {
        let styleObj = {
            display: 'flex',
            color: 'black',
            borderRadius: '5px',
            marginLeft: '10px',
            height: '120px',
            width: '80px',
            borderWidth: '2px',
            borderStyle: 'solid',
            alignItems: 'center',
            boxSizing: 'border-box',

        }
        if (this.card.name === 'space') {
            return {
                ...styleObj,
                color: 'black',
                borderColor: 'lightGrey',
            };
        }
        const suitStyle = {
            borderColor: this.card.suit % 2 ? 'black': 'red',
            borderStyle: this.card.suit <=2 ? 'solid' : 'dashed',
        }
        return { ...styleObj, ...suitStyle };
    }
}

export default Card;
