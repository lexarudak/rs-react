import React, { useEffect, useState } from 'react';
import PageNames from '../../base/enums/pageNames';
import { PageProps } from '../../base/models';
import Banner from '../../components/banner/banner';
import BigCard from '../../components/cards/bigCard/bigCard';
import CardsContainer from '../../components/containers/cardContainer/cardsContainer';
import SearchInput from '../../components/forms/searchForm/searchForm';
import InnerBanner from '../../components/innerBanner/innerBanner';
import Loading from '../../components/loading/loading';
import Popup from '../../components/popup/popup';
import {
  useLazyFetchCharacterByIdQuery,
  useLazySearchCharactersQuery,
} from '../../store/rickAndMorty/rickAndMorty.api';
import styles from './mainPage.module.scss';

function MainPage(props: PageProps) {
  useEffect(() => {
    props.changeName(PageNames.mainPage);
  });

  const [isPopupShow, setIsPopupShow] = useState(false);
  const [
    fetchCharactersData,
    { isFetching: isCardsFetching, currentData: cards, error: cardsError },
  ] = useLazySearchCharactersQuery();
  const [
    fetchCharacterById,
    { isFetching: isCharFetching, currentData: char, isError: isCharError },
  ] = useLazyFetchCharacterByIdQuery();

  return (
    <div className={styles.container}>
      <SearchInput fetchData={fetchCharactersData} />
      {isCardsFetching && <Loading />}
      {cardsError && (
        <InnerBanner text={typeof cardsError === 'string' ? cardsError : 'No Cards'} />
      )}
      {cards && (
        <CardsContainer
          cards={cards}
          fetchCharacterById={fetchCharacterById}
          setIsPopupShow={setIsPopupShow}
        />
      )}
      <Popup isShow={Boolean(isPopupShow)} closeFn={setIsPopupShow.bind(null, false)}>
        {isCharFetching && <Loading />}
        {isCharError && <Banner text="No Character" />}
        {char && <BigCard {...char} />}
      </Popup>
    </div>
  );
}

export default MainPage;
