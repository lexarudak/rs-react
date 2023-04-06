import React, { useEffect, useState } from 'react';
import PageNames from '../../base/enums/pageNames';
import { Character, PageProps } from '../../base/types';
import BigCard from '../../components/cards/card/bigCard/bigCard';
import CardsContainer from '../../components/containers/cardContainer/cardsContainer';
import SearchInput from '../../components/forms/searchForm/searchForm';
import Popup from '../../components/popup/popup';

function MainPage(props: PageProps) {
  useEffect(() => {
    props.changeName(PageNames.mainPage);
  });

  const [cards, setCards] = useState<Character[]>([]);
  const [activeCard, setActiveCard] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const removeActiveCard = setActiveCard.bind(null, null);

  return (
    <div className="main__container">
      <SearchInput setCards={setCards} setIsLoading={setIsLoading} />
      {isLoading && <div>loading...</div>}
      {cards[0] && !isLoading && <CardsContainer cards={cards} setActiveCard={setActiveCard} />}
      {!isLoading && !cards[0] && <p className="no-cards">No cards</p>}
      <Popup isShow={Boolean(activeCard)} closeFn={removeActiveCard}>
        <BigCard char={activeCard} />
      </Popup>
    </div>
  );
}

export default MainPage;
