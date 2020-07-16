import CardMechanics from './card';



const create = () => {
    const deck = [];
    for (let num = 1; num <= 13; num++) {
        for (let suit = 1; suit <= 4; suit++) {
            deck.push(CardMechanics.create(num, suit));
        }
    }
    return deck;
}

const shuffle = deck => {
    for (let i = 0; i < deck.length; i++) {
        const newIndex = Math.floor(Math.random() * deck.length);
        const placeholder = {...deck[i]};
        deck[i] = {...deck[newIndex]};
        deck[newIndex] = placeholder;
    }
}


export default {
    create,
    shuffle,
};