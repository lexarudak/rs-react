import { CardImgInfo } from 'base/types';
import React from 'react';

function CardImg({ rating, sale, thumbnail }: CardImgInfo) {
  function setRating() {
    const validRating = rating > 0 && rating <= 5 ? rating : 0;
    return <span className="card__rating">{validRating.toFixed(1)}</span>;
  }

  function setSale() {
    const validSale = Math.ceil(sale);
    if (validSale > 0 && validSale < 100) {
      return <span className="card__sale">{validSale}</span>;
    }
  }

  return (
    <div
      className="card__img"
      style={{
        backgroundImage: thumbnail,
      }}
    >
      <>{setSale()}</>
      <>{setRating()}</>
    </div>
  );
}

export default CardImg;
