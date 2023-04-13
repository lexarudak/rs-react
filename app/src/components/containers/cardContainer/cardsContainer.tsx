import InnerText from '../../../base/enums/innerText';
import { Character } from '../../../base/models';
import React, { useState } from 'react';
import Banner from '../../../components/banner/banner';
import BigCard from '../../../components/cards/bigCard/bigCard';
import Loading from '../../../components/loading/loading';
import Popup from '../../../components/popup/popup';
import { useLazyFetchCharacterByIdQuery } from '../../../store/rickAndMorty/rickAndMorty.api';
import Card from '../../cards/card/card';
import style from './cardsContainer.module.scss';

function CardsContainer(props: { cards: Character[] }) {
  const [isPopupShow, setIsPopupShow] = useState(false);
  const [fetchCharacterById, { isFetching, currentData, isError }] =
    useLazyFetchCharacterByIdQuery();

  return (
    <React.Fragment>
      <div className={style.container}>
        {props.cards.map((character: Character) => (
          <Card
            character={character}
            fetchCharacterById={fetchCharacterById}
            setIsPopupShow={setIsPopupShow}
            key={character.id}
          />
        ))}
      </div>
      <Popup isShow={Boolean(isPopupShow)} closeFn={setIsPopupShow.bind(null, false)}>
        {isFetching && <Loading />}
        {isError && <Banner text={InnerText.noCharacters} />}
        {currentData && <BigCard {...currentData} />}
      </Popup>
    </React.Fragment>
  );
}

export default CardsContainer;
