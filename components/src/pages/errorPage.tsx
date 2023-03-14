import PageNames from '../base/enums/pageNames';
import PageProps from '../base/types';
import Page from './page';

class ErrorPage extends Page {
  constructor(props: PageProps) {
    super(props, PageNames.errorPage);
  }
}

export default ErrorPage;
