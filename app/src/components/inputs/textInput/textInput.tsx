import React from 'react';
import { TextInputProps } from 'base/types';
import inputStyles from '../inputs.module.scss';

function TextInput({ config: { title }, register }: TextInputProps) {
  return (
    <label className={inputStyles.block}>
      <span className={inputStyles.title}>{title}</span>
      <input
        {...register}
        type={'text'}
        placeholder={`enter ${title.toLowerCase()}`}
        className={inputStyles.input}
      ></input>
    </label>
  );
}

export default TextInput;
