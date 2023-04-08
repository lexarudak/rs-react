import React from 'react';
import styles from './banner.module.scss';

function Banner(props: { text: string }) {
  return <h2 className={styles.banner}>{props.text}</h2>;
}

export default Banner;
