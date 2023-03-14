import PageNames from '../components/enums/pageNames';
import PageProps from '../components/types';
import Page from './page';

class MainPage extends Page {
  constructor(props: PageProps) {
    super(props, PageNames.mainPage);
  }
}

export default MainPage;
