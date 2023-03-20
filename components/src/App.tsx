import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/appRouter/appRouter';

class App extends React.Component {
  constructor(props: string) {
    super(props);
  }

  public render() {
    return (
      <>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
