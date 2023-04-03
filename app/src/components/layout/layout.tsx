import React from 'react';
import { Outlet } from 'react-router-dom';
import PageNames from '../../base/enums/pageNames';
import Footer from './footer/footer';
import Header from './header/header';

function Layout(props: { pageName: PageNames }) {
  return (
    <>
      <Header {...props} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
