import TestId from '../../../base/enums/testId';
import { TextInputProps } from 'base/types';
import React from 'react';
import inputStyles from '../inputs.module.scss';
import styles from './imageInput.module.scss';

function ImageInput({ config: { title }, register }: TextInputProps) {
  return (
    <label className={inputStyles.block}>
      <span className={inputStyles.title}>{title}</span>
      <input
        {...register}
        data-testid={TestId.imageInput}
        className={styles.input}
        type="file"
        accept="image/png, image/jpeg, image/jpg"
      ></input>
    </label>
  );
}

export default ImageInput;
