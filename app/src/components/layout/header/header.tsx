import PageNames from 'base/enums/pageNames';
import Nav from '../../nav/nav';
import React from 'react';
import styles from './header.module.scss';

function Header(props: { pageName: PageNames }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>React Components.</h1>
      <span className={styles.pageTitle}>/ {props.pageName}</span>
      <Nav />
    </header>
  );
}

export default Header;
