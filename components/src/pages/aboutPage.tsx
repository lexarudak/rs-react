import PageNames from '../components/enums/pageNames';
import PageProps from 'components/types';
import Page from './page';

class AboutPage extends Page {
  constructor(props: PageProps) {
    super(props, PageNames.aboutPage);
  }
}

export default AboutPage;
