import React from 'react';
import styles from './innerBanner.module.scss';

function InnerBanner(props: { text: string }) {
  return <p className={styles.banner}>{props.text}</p>;
}

export default InnerBanner;
