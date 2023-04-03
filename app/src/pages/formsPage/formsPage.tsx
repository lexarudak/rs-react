import React, { useEffect, useState } from 'react';
import PageNames from '../../base/enums/pageNames';
import { FormPageCard, PageProps } from '../../base/types';
import AppForm from '../../components/appForm/appForm';
import FormCardsContainer from '../../components/formCards/formCardsContainer/formCardsContainer';
import PopupWithText from '../../components/popup/popupWithText';

function FormsPage(props: PageProps) {
  useEffect(() => {
    props.changeName(PageNames.formsPage);
  });

  const [isPopupShow, setIsPopupShow] = useState(false);
  const [cards, updateCards] = useState<FormPageCard[]>([]);
  const [currentKey, increaseCurrentKey] = useState(0);

  function showPopupForSeconds(seconds: number) {
    setIsPopupShow(true);
    setTimeout(() => {
      setIsPopupShow(false);
    }, seconds * 1000);
  }

  function addNewCard(cardInfo: FormPageCard): void {
    increaseCurrentKey(currentKey + 1);
    updateCards([...cards, { ...cardInfo, key: currentKey }]);
  }

  return (
    <div className="main__container">
      <AppForm showPopupForSeconds={showPopupForSeconds} addNewCard={addNewCard} />
      <FormCardsContainer cards={cards} />
      <PopupWithText text={'Card created successfully!'} isPopupShow={isPopupShow} />
    </div>
  );
}

export default FormsPage;
