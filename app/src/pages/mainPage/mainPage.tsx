import CardsContainer from '../../components/cardContainer/cardsContainer';
import React, { useEffect, useState } from 'react';
import PageNames from '../../base/enums/pageNames';
import { Character, PageProps } from '../../base/types';
import SearchInput from '../../components/searchBar/searchBar';

function MainPage(props: PageProps) {
  useEffect(() => {
    props.changeName(PageNames.mainPage);
  });

  const [cards, setCards] = useState<Character[]>([]);

  return (
    <div className="main__container">
      <SearchInput setCards={setCards} />
      <CardsContainer cards={cards} />
    </div>
  );
}

export default MainPage;
