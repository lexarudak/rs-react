import PageNames from '../components/enums/pageNames';
import PageProps from '../components/types';
import Page from './page';

class ErrorPage extends Page {
  constructor(props: PageProps) {
    super(props, PageNames.errorPage);
  }
}

export default ErrorPage;
