import React from 'react';

function CardPrice(props: { sale: number; price: number }) {
  const sale = Math.ceil(props.sale);

  function makePriceWithCents(price: number) {
    const str = price.toFixed(2);
    return (
      <>
        <span>{str.slice(0, -3)}</span>
        <span className="card__cents">{str.slice(-3)}</span>
      </>
    );
  }

  function makeNewPrice(price: number, sale: number) {
    return price * ((100 - sale) / 100);
  }

  function isPriceInvalid(price: number) {
    return price < 0.01 || price > 9999.99;
  }

  function makePrice(price: number, isSale: boolean) {
    if (isPriceInvalid(price)) return <p className="card__price"> -</p>;
    if (isSale) {
      return (
        <>
          <p className="card__price card__price_sale">
            {makePriceWithCents(makeNewPrice(price, sale))}
          </p>
          <span className="card__price card__price_old">{makePriceWithCents(price)}</span>
        </>
      );
    }
    return <p className="card__price">{makePriceWithCents(price)}</p>;
  }

  function isSale(sale: number) {
    return sale > 0 && sale <= 99;
  }

  return (
    <div className="card__prices">
      <>{makePrice(props.price, isSale(sale))}</>
    </div>
  );
}

export default CardPrice;
