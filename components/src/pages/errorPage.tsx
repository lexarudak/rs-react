import PageProps from 'components/types';
import Page from './page';

class ErrorPage extends Page {
  constructor(props: PageProps) {
    super(props, '404 not found :(');
  }
}

export default ErrorPage;
