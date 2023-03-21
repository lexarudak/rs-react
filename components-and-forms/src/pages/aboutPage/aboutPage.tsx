import PageNames from '../../base/enums/pageNames';
import { PageProps } from 'base/types';
import Page from '../page/page';

class AboutPage extends Page {
  constructor(props: PageProps) {
    super(props, PageNames.aboutPage);
  }
}

export default AboutPage;
