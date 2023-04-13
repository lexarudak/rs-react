import { InputErrorProps } from '../../../base/models';
import React from 'react';
import styles from './inputError.module.scss';

function InputError(err: InputErrorProps) {
  return <p className={`${styles.errorText} ${err && styles.errorTextActive}`}>{err?.message}</p>;
}

export default InputError;
