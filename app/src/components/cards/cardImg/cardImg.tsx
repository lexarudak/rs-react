import { CardImgInfo } from 'base/types';
import React from 'react';

function CardImg(props: CardImgInfo) {
  function setRating() {
    const rating = props.rating > 0 && props.rating <= 5 ? props.rating : 0;
    return <span className="card__rating">{rating.toFixed(1)}</span>;
  }

  function setSale() {
    const sale = Math.ceil(props.sale);
    if (sale > 0 && sale < 100) {
      return <span className="card__sale">{sale}</span>;
    }
  }

  return (
    <div
      className="card__img"
      style={{
        backgroundImage: props.thumbnail,
      }}
    >
      <>{setSale()}</>
      <>{setRating()}</>
    </div>
  );
}

export default CardImg;
