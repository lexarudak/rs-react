import AppForm from '../../components/appForm/appForm';
import FormCardsContainer from '../../components/formCards/formCardsContainer';
import React from 'react';
import PageNames from '../../base/enums/pageNames';
import { FormPageCard, FormPageState, PageProps } from '../../base/types';
import Page from '../page/page';
import PopupWithText from '../../components/popup/popupWithText';

class FormsPage extends Page {
  state: FormPageState;
  constructor(props: PageProps) {
    super(props, PageNames.formsPage);

    this.state = {
      isPopupShow: false,
      cards: [],
    };

    this.showPopup = this.showPopup.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
  }

  public showPopup(isPopupShowNow: boolean) {
    this.setState({ isPopupShow: isPopupShowNow });
  }

  public addNewCard(cardInfo: FormPageCard): void {
    this.setState((state: FormPageState) => {
      const newArr = [...state.cards];
      newArr.push(cardInfo);
      return { cards: newArr };
    });
  }

  public render() {
    return (
      <div className="main__container">
        <AppForm showPopup={this.showPopup} addNewCard={this.addNewCard} />
        <FormCardsContainer cards={this.state.cards} />
        <PopupWithText text={'Card created successfully!'} isPopupShow={this.state.isPopupShow} />
      </div>
    );
  }
}

export default FormsPage;
