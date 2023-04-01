import React from 'react';

function CardButton({ stock }: { stock: number }) {
  return (
    <button className="card-button" disabled={stock <= 0}>
      To card
    </button>
  );
}

export default CardButton;
