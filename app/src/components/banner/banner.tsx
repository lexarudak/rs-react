import React from 'react';
import styles from './banner.module.scss';

function Banner({ text }: { text: string }) {
  return <h2 className={styles.banner}>{text}</h2>;
}

export default Banner;
