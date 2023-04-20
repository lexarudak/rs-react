import React from 'react';
import styles from './OuterBanner.module.scss';

const OuterBanner = ({ text }: { text: string }) => <h2 className={styles.banner}>{text}</h2>;

export default OuterBanner;
