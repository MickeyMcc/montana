import CardMechanics from './card';

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


export default {
    display,
    move,
};