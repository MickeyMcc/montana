import React, { useMemo, useState } from 'react';
import CardMechanics from '../mechanics/card';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const getListStyle = () => {};
const getItemStyle = () => {};

export default ({ card, spaceName, dropType, dragType }) => {
    const [lHightlight, setHighlight] = useState(highlight);
    const { suit, name, number, highlight } = card;

    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        // padding: grid * 2,
        // margin: `0 0 ${grid}px 0`,
        ...CardMechanics.style(card),
        // change background colour if dragging    
        // styles we need to apply on draggables
        ...draggableStyle
    });
    
    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? 'lightblue' : 'lightgrey',
        width: '90px',
        height: '120px',
    });


    const style = useMemo(() => {
        return CardMechanics.style(card);
    }, [highlight, lHightlight])

    // const dropType = name === 'space' ? 'Ace' : name.split(' ')[0]

    // const dragType = name.split(' ')[0] === 'Ace' ? name.split(' ')[0] : name;

    return (
        
            <Droppable type={dropType} droppableId={spaceName}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver && name === 'space')}
                    >
                        {name !== 'space' && !snapshot.isDraggingOver ? <Draggable
                            type={dragType}
                            index={0}
                            key={name}
                            draggableId={name}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                                    {name === 'space' ? '' : name}<br />
                                    {dropType}<br />{dragType}
                                </div>
                            )}
                            </Draggable> : <div style={CardMechanics.style(card)}> {name === 'space' ? '' : name}
                            {dropType}
                            </div>}
                        {provided.placeholder}
                    </div>)
                }
            </Droppable>
    );
};