import React from 'react';
import Card from '../card/card';
import plants from '../../../data/plants.json';
import { CardInfo } from 'base/types';

function CardsContainer({ searchValue }: { searchValue: string }) {
  function isPlantIncludesSting(plant: CardInfo, string: string) {
    const upperString = string.toUpperCase();
    return (
      plant.description.toUpperCase().includes(upperString) ||
      plant.title.toUpperCase().includes(upperString) ||
      plant.type.toUpperCase().includes(upperString)
    );
  }

  function setFilterArr() {
    return plants.products.filter((plant) => isPlantIncludesSting(plant, searchValue));
  }

  return (
    <div className="cards-container">
      {setFilterArr().map((plant) => (
        <Card {...plant} key={plant.id} />
      ))}
    </div>
  );
}

export default CardsContainer;
