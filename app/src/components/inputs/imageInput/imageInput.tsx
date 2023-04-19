import React from 'react';
import { TestId, TextInputProps } from 'models';
import { inputStyles } from 'components';
import styles from './ImageInput.module.scss';

const ImageInput = ({ config: { TITLE }, register }: TextInputProps) => {
  const ACCEPT = 'image/png, image/jpeg, image/jpg';

  return (
    <label className={inputStyles.block}>
      <span className={inputStyles.title}>{TITLE}</span>
      <input
        {...register}
        data-testid={TestId.imageInput}
        className={styles.input}
        type="file"
        accept={ACCEPT}
      ></input>
    </label>
  );
};

export default ImageInput;
