import React from 'react';
import styles from './InnerBanner.module.scss';

const InnerBanner = ({ text }: { text: string }) => <p className={styles.banner}>{text}</p>;

export default InnerBanner;
