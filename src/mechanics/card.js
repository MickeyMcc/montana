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

const create = (number, suit) => {
    let card;
    if (!number && !suit) {
        card = {
            name: 'space',
        }
    } else {
        card = {
            number,
            suit,
            name: `${names[number]} of ${suits[suit]}`,
            followingCard: `${names[number + 1]} of ${suits[suit]}`
        }
    }
    card.highlight = false;
    return card;
}

const onClick = (card) => {
    console.log('click')
    return toggleHighlight(card);
}

const toggleHighlight = (card) => {
    console.log('highlight', !highlight)
    card.highlight = !card.highlight;
    return card
}

const style = (card) => {
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
        backgroundColor: card.highlight ? 'lightBlue' : 'white',
    }
    if (card.name === 'space') {
        return {
            ...styleObj,
            color: 'black',
            borderColor: 'lightGrey',
            backgroundColor: 'transparent'
        };
    }
    const suitStyle = {
        borderColor: card.suit % 2 ? 'black': 'red',
        borderStyle: card.suit <=2 ? 'solid' : 'dashed',
    }
    return { ...styleObj, ...suitStyle };
}

export default {
    toggleHighlight,
    style,
    onClick,
    create,
}
