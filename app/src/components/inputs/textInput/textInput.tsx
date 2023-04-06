import React from 'react';
import { TextInputProps } from 'base/types';

function TextInput({ config: { title }, register }: TextInputProps) {
  return (
    <label className="input-block__label">
      <span className="input-block__title">{title}</span>
      <input
        {...register}
        type={'text'}
        placeholder={`enter ${title.toLowerCase()}`}
        className="input-block__input"
      ></input>
    </label>
  );
}

export default TextInput;
