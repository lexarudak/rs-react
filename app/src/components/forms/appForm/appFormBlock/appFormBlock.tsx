import { FormBlock } from 'base/types';
import React from 'react';
import styles from './appFormBlock.module.scss';

function AppFormBlock({ inputBlock, err }: FormBlock) {
  return (
    <div className={styles.block}>
      <div className={styles.input}>{inputBlock}</div>
      <div className={styles.error}>
        <span className={`${styles.errorText} ${err && styles.errorTextActive}`}>
          {err?.message}
        </span>
      </div>
    </div>
  );
}

export default AppFormBlock;
