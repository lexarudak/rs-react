import React from 'react';
import { Alts, AssetsPath, TestId } from 'models';
import styles from './Loading.module.scss';

function Loading() {
  return (
    <div className={styles.container} data-testid={TestId.loading}>
      <img className={styles.portal} src={AssetsPath.portalImg} alt={Alts.portalAlt}></img>;
      <img className={styles.rick} src={AssetsPath.rickImg} alt={Alts.rickAlt}></img>;
    </div>
  );
}

export default Loading;
