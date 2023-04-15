import Nav from './nav/nav';
import React from 'react';
import styles from './header.module.scss';
import { useAppSelector } from '../../hooks/hooks';

function Header() {
  const { currentPage } = useAppSelector((state) => state.app);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>React Components.</h1>
      <span className={styles.pageTitle}>/ {currentPage}</span>
      <Nav />
    </header>
  );
}

export default Header;
