import React from 'react';
import Card from '../card/card';
import plants from '../../../data/plants.json';
import { CardInfo } from 'base/types';

class CardsContainer extends React.Component<{ searchValue: string }> {
  constructor(props: { searchValue: string }) {
    super(props);
  }

  private isPlantIncludesSting(plant: CardInfo, string: string) {
    const upperString = string.toUpperCase();
    return (
      plant.description.toUpperCase().includes(upperString) ||
      plant.title.toUpperCase().includes(upperString) ||
      plant.type.toUpperCase().includes(upperString)
    );
  }

  private setFilterArr() {
    return plants.products.filter((plant) =>
      this.isPlantIncludesSting(plant, this.props.searchValue)
    );
  }

  public render() {
    return (
      <div className="cards-container">
        {this.setFilterArr().map((plant) => (
          <Card {...plant} key={plant.id} />
        ))}
      </div>
    );
  }
}

export default CardsContainer;
