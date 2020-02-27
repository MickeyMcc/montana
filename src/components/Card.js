import React from 'react';

export default ( { card: { suit, name, number }, cardStyle }) => (
    <div style={cardStyle}>
        {name === 'space' ? '' : name}
    </div>
);