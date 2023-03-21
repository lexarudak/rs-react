import PageNames from '../../base/enums/pageNames';
import { PageProps } from '../../base/types';
import Page from '../page/page';

class FormsPage extends Page {
  constructor(props: PageProps) {
    super(props, PageNames.formsPage);
  }
}

export default FormsPage;
