import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer/footer';
import Header from './header/header';
import styles from './layout.module.scss';

function Layout() {
  return (
    <>
      <Header />
      <main className={styles.maim}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
