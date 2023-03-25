import React from 'react';

class CardStock extends React.Component<{ stock: number }> {
  constructor(props: { stock: number }) {
    super(props);
  }

  private setStock() {
    const stock = Math.floor(this.props.stock);

    if (stock > 1000) return <div className="card__stock">more than 1000 in stock</div>;
    if (stock > 0) return <div className="card__stock">in stock: {stock}</div>;
    return <div className="card__stock card__stock_null">not in stock</div>;
  }

  public render() {
    return <>{this.setStock()}</>;
  }
}

export default CardStock;
