import React from 'react';

function CardStock(props: { stock: number }) {
  function setStock(stock: number) {
    const stockFloor = Math.floor(stock);
    if (stockFloor > 1000) return <div className="card__stock">more than 1000 in stock</div>;
    if (stockFloor > 0) return <div className="card__stock">in stock: {stockFloor}</div>;
    return <div className="card__stock card__stock_null">not in stock</div>;
  }

  return <>{setStock(props.stock)}</>;
}

export default CardStock;
