import AppForm from '../../components/appForm/appForm';
import FormCardsContainer from '../../components/formCards/formCardsContainer/formCardsContainer';
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
      cards: [
        {
          border: 'No, thanks',
          date: '0001-11-11',
          image: 'C:fakepath.travel.png',
          key: -1,
          name: 'Card title',
          titleStyle: ['Bold', '', 'Bright color'],
          type: 'Cool card',
        },
      ],
      counter: 0,
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
      const newCardInfo = { ...cardInfo, key: state.counter };
      console.log(newCardInfo);
      newArr.push(newCardInfo);
      return { cards: newArr, counter: state.counter + 1 };
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
