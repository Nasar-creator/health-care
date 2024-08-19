import React from 'react';
import Card from './Card';

function CardList({ cards }) {
  return (
    <div className="card-list">
      {cards.map(card => (
        <Card key={card._id} title={card.title} description={card.description} />
      ))}
    </div>
  );
}

export default CardList;
