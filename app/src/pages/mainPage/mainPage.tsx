import React, { useEffect, useState } from 'react';
import PageNames from '../../base/enums/pageNames';
import { Character, PageProps } from '../../base/types';
import Banner from '../../components/banner/banner';
import BigCard from '../../components/cards/bigCard/bigCard';
import CardsContainer from '../../components/containers/cardContainer/cardsContainer';
import SearchInput from '../../components/forms/searchForm/searchForm';
import InnerBanner from '../../components/innerBanner/innerBanner';
import Loading from '../../components/loading/loading';
import Popup from '../../components/popup/popup';
import styles from './mainPage.module.scss';

function MainPage(props: PageProps) {
  useEffect(() => {
    props.changeName(PageNames.mainPage);
  });

  const [cards, setCards] = useState<Character[]>([]);
  const [isPopupShow, setIsPopupShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCard, setActiveCard] = useState<Character | string>();

  function fillPage() {
    if (isLoading) return <Loading />;
    if (cards[0] && !isLoading)
      return (
        <CardsContainer
          cards={cards}
          setActiveCard={setActiveCard}
          setIsPopupShow={setIsPopupShow}
        />
      );
    return <InnerBanner text="No Cards" />;
  }

  function fillPopup() {
    if (!activeCard) return <Loading />;
    if (typeof activeCard === 'string') return <Banner text={activeCard} />;
    return <BigCard {...activeCard} />;
  }

  return (
    <div className={styles.container}>
      <SearchInput setCards={setCards} setIsLoading={setIsLoading} />
      {fillPage()}
      <Popup isShow={Boolean(isPopupShow)} closeFn={setIsPopupShow.bind(null, false)}>
        {fillPopup()}
      </Popup>
    </div>
  );
}

export default MainPage;
