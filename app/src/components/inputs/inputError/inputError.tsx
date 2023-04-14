import React from 'react';
import styles from './inputError.module.scss';

function InputError({ err }: { err: string | undefined }) {
  return <p className={`${styles.errorText} ${err && styles.errorTextActive}`}>{err}</p>;
}

export default InputError;
