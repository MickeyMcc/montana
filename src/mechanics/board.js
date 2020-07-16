import CardMechanics from './card';
import DeckMechanics from './deck';

const display = deck => {
    const layout = [[CardMechanics.create()],[CardMechanics.create()],[CardMechanics.create()], [CardMechanics.create()]];
    deck.forEach((card, i) => {
        layout[Math.floor(i / 13)].push(card);
    });
    return layout;
}

const clone = layout => JSON.parse(JSON.stringify(layout))

const move = (layout, [sourceRow, sourceCol], [destRow, destCol]) => {
    const newLayout = clone(layout)
    console.log(sourceRow, sourceCol, destRow, destCol)
    console.log(newLayout);
    console.log(newLayout[destRow])
    console.log(newLayout[destRow][destCol])
    if (newLayout[destRow][destCol].name === 'space') {
        const movedCard = { ...newLayout[sourceRow].splice(sourceCol, 1, CardMechanics.create())[0] };
        console.log(newLayout[destRow]);
        console.log('moved card', movedCard)
        newLayout[destRow].splice(destCol, 1, movedCard)
    }

    console.log(newLayout[destRow]);
    return newLayout;
};

const redeal = (layout) => {
    const newLayout = [[],[],[],[]];
    const bonePile = [];
    for (let li = 0; li < layout.length; li++) {
        let row = layout[li];
        console.log(row)
        for (let ci = 0; ci < row.length; ci++) {
            let thisCard = row[ci];
            
            if (thisCard.name === 'space') {
                // do nothing
            } else if (thisCard.number - 1 === ci && thisCard.suit === row[0].suit && newLayout[li].length === ci) {
                console.log(thisCard);
            console.log(ci)
                newLayout[li].push(thisCard)
                console.log(JSON.stringify(newLayout[li]))
            } else {
                bonePile.push(thisCard)
            }
        }
    }
    DeckMechanics.shuffle(bonePile);
    console.log(newLayout)
    console.log(bonePile)
    for (let row of newLayout) {
        row.push(CardMechanics.create());
        while (row.length < 14) {
            row.push(bonePile.pop())
        }
    }
    console.log(bonePile);

    console.log(newLayout)
    return newLayout;
}


export default {
    display,
    move,
    redeal,
};