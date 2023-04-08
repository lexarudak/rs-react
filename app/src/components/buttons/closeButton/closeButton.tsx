import React from 'react';
import styles from './closeButton.module.scss';

function CloseButton({ closeFn }: { closeFn: () => void }) {
  return (
    <div
      className={styles.closeButton}
      onClick={() => {
        closeFn();
      }}
    >
      <div className={styles.topStick}></div>
      <div className={(styles.stick, styles.bottomStick)}></div>
    </div>
  );
}

export default CloseButton;
