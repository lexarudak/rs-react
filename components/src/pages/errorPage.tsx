import Page from './page';

class ErrorPage extends Page {
  constructor(props: string) {
    super(props, '404 not found :(');
  }
}

export default ErrorPage;
