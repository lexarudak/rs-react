import React from 'react';
import { Outlet } from 'react-router-dom';
import PageNames from '../../base/enums/pageNames';
import Footer from './footer';
import Header from './header';

class Layout extends React.Component<{ name: PageNames }> {
  constructor(props: { name: PageNames }) {
    super(props);
  }

  public render() {
    return (
      <>
        <Header {...this.props} />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}

export default Layout;
