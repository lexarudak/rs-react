import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'layout';
import styles from './Layout.module.scss';

const Layout = () => (
  <>
    <Header />
    <main className={styles.maim}>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
