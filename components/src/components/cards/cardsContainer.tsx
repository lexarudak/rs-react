import React from 'react';
import Card from './card';
import plants from '../../data/plants.json';

class CardsContainer extends React.Component {
  constructor(props: string) {
    super(props);
  }

  public render() {
    return (
      <div className="cards-container">
        <Card {...plants.products[0]} />
      </div>
    );
  }
}

export default CardsContainer;
