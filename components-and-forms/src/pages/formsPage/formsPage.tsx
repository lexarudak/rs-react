import AppForm from '../../components/appForm/appForm';
import FormCardsContainer from '../../components/formCards/formCardsContainer';
import React from 'react';
import PageNames from '../../base/enums/pageNames';
import { FormPageState, PageProps } from '../../base/types';
import Page from '../page/page';
import PopupWithText from '../../components/popup/popupWithText';

class FormsPage extends Page {
  state: FormPageState;
  constructor(props: PageProps) {
    super(props, PageNames.formsPage);

    this.state = {
      isPopupShow: false,
    };
  }

  public showPopup(isPopupShowNow: boolean) {
    this.setState({ isPopupShow: isPopupShowNow });
  }

  public render() {
    return (
      <div className="main__container">
        <AppForm showPopup={this.showPopup.bind(this)} />
        <FormCardsContainer />
        <PopupWithText text={'Card created successfully!'} isPopupShow={this.state.isPopupShow} />
      </div>
    );
  }
}

export default FormsPage;
