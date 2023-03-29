import { CardInfo } from 'base/types';
import React from 'react';

function CardButton(props: CardInfo) {
  return (
    <button className="card-button" disabled={props.stock <= 0}>
      To card
    </button>
  );
}

export default CardButton;
