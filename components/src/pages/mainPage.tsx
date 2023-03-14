import PageNames from '../base/enums/pageNames';
import PageProps from '../base/types';
import Page from './page';

class MainPage extends Page {
  constructor(props: PageProps) {
    super(props, PageNames.mainPage);
  }
}

export default MainPage;
