import TestId from '../../base/enums/testId';
import React from 'react';
import styles from './loading.module.scss';

function Loading() {
  return (
    <div className={styles.container} data-testid={TestId.loading}>
      <img className={styles.portal} src="/img/portal.webp" alt="portal"></img>;
      <img className={styles.rick} src="/img/rick.webp" alt="rick"></img>;
    </div>
  );
}

export default Loading;
