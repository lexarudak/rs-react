import React from 'react';
import { Outlet } from 'react-router-dom';
import PageNames from '../../base/enums/pageNames';
import Footer from './footer/footer';
import Header from './header/header';
import styles from './layout.module.scss';

function Layout(props: { pageName: PageNames }) {
  return (
    <>
      <Header {...props} />
      <main className={styles.maim}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
