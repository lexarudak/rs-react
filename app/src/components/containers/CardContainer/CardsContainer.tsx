// import React, { useState } from 'react';
// import { BigCard, MainCard, OuterBanner, Loading, Popup } from 'components';
// import { useLazyFetchCharacterByIdQuery } from 'store';
// import { InnerText, Character } from 'models';
// import style from './CardsContainer.module.scss';

// const CardsContainer = ({ cards }: { cards: Character[] }) => {
//   const [isPopupShow, setIsPopupShow] = useState(false);
//   const [fetchCharacterById, { isFetching, currentData, isError }] =
//     useLazyFetchCharacterByIdQuery();

//   const fillContainer = () =>
//     cards.map((character: Character) => (
//       <MainCard
//         character={character}
//         fetchCharacterById={fetchCharacterById}
//         setIsPopupShow={setIsPopupShow}
//         key={character.id}
//       />
//     ));

//   return (
//     <>
//       <div className={style.container}>{fillContainer()}</div>
//       <Popup isShow={Boolean(isPopupShow)} closeFn={setIsPopupShow.bind(null, false)}>
//         {isFetching && <Loading />}
//         {isError && <OuterBanner text={InnerText.noCharacters} />}
//         {currentData && <BigCard {...currentData} />}
//       </Popup>
//     </>
//   );
// };

// export default CardsContainer;
