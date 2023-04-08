import Loading from '../../components/loading/loading';
import React, { useEffect, useState } from 'react';
import PageNames from '../../base/enums/pageNames';
import { Character, PageProps } from '../../base/types';
import BigCard from '../../components/cards/bigCard/bigCard';
import CardsContainer from '../../components/containers/cardContainer/cardsContainer';
import SearchInput from '../../components/forms/searchForm/searchForm';
import Popup from '../../components/popup/popup';
import styles from './mainPage.module.scss';
import InnerBanner from '../../components/innerBanner/innerBanner';

function MainPage(props: PageProps) {
  useEffect(() => {
    props.changeName(PageNames.mainPage);
  });

  const [cards, setCards] = useState<Character[]>([]);
  const [activeCard, setActiveCard] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const removeActiveCard = setActiveCard.bind(null, null);

  function fillPage() {
    if (isLoading) return <Loading />;
    if (cards[0] && !isLoading)
      return <CardsContainer cards={cards} setActiveCard={setActiveCard} />;

    return <InnerBanner text="No Cards" />;
  }

  return (
    <div className={styles.container}>
      <SearchInput setCards={setCards} setIsLoading={setIsLoading} />
      {fillPage()}
      <Popup isShow={Boolean(activeCard)} closeFn={removeActiveCard}>
        <BigCard char={activeCard} />
      </Popup>
    </div>
  );
}

export default MainPage;
