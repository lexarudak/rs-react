import React from 'react';
import { TextInputProps } from 'models';
import { inputStyles } from 'components';

function TextInput({ config: { TITLE }, register }: TextInputProps) {
  return (
    <label className={inputStyles.block}>
      <span className={inputStyles.title}>{TITLE}</span>
      <input
        {...register}
        type={'text'}
        placeholder={`enter ${TITLE.toLowerCase()}`}
        className={inputStyles.input}
      ></input>
    </label>
  );
}

export default TextInput;
