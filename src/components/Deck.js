import React, { useState } from 'react';
import Card from './Card';
import boardMechanics from '../mechanics/board';
import { DragDropContext } from 'react-beautiful-dnd';

export default ({ deck }) => {
    const [layout, setLayout] = useState(boardMechanics.display(deck))

    function onDragEnd({ source, destination }) {
        if (destination.droppableId) {
            const sourceIndexes = source.droppableId.split('x').map(int => parseInt(int, 10));
            const destinationIndex = destination.droppableId.split('x').map(int => parseInt(int, 10));
            console.log(arguments);
            setLayout(boardMechanics.move(layout, sourceIndexes, destinationIndex));
        }
    }

    const getDropType = (card, prevCard, i) => {
        if (card.name === 'space') {
            if (i === 0) {
                return '1'
            }
            return `${prevCard.number+1}#${prevCard.suit}`
        } else {
            if (card.number === 1) {
                return '1';
            }
            return `${card.number}#${card.suit}`
        }
    }

    const getDragType = (card) => {
        
        return `${card.number}#${card.suit}`
    }

    const onRedeal = () => {
        setLayout(boardMechanics.redeal(layout));
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ width: '100%' }}>
            {layout.map((row, rowIndex) => 
                <div key={rowIndex} style={{ marginTop: '10px', display: 'flex', flex: 1, flexDirection: 'row'}}>
                    {row.map((card, cardIndex) => <Card
                        spaceName={`${rowIndex}x${cardIndex}`} 
                        key={card.name === 'space' ? `space${cardIndex}${rowIndex}`: card.name} 
                        card={card}
                        dropType={getDropType(card, layout[rowIndex][cardIndex - 1], cardIndex)} 
                        dragType={getDragType(card)}
                    />)}
                </div>
            )}
        </div>
        <button style={{ marginTop: '24px' }} onClick={onRedeal}>SHUFFLE!</button>
        </DragDropContext>
    );
};