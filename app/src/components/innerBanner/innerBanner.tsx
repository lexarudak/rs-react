import React from 'react';
import styles from './innerBanner.module.scss';

function InnerBanner({ text }: { text: string }) {
  return <p className={styles.banner}>{text}</p>;
}

export default InnerBanner;
