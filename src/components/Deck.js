import React from 'react';
import Card from './Card';

export default ({ deck }) => {

    return (
        <div style={{ width: '100%' }}>
            {deck.layout.map(row => 
                <div style={{ marginTop: '10px', display: 'flex', flex: 1, flexDirection: 'row'}}>
                {row.map(card => <Card key={card.card.name} {...card} />)}
                </div>
            )}
        </div>
    );
};