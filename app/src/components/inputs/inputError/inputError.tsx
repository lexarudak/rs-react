import React from 'react';
import styles from './InputError.module.scss';

const InputError = ({ err }: { err: string | undefined }) => (
  <p className={`${styles.errorText} ${err && styles.errorTextActive}`}>{err}</p>
);

export default InputError;
