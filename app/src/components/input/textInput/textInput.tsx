import React from 'react';
import { TextInputProps } from 'base/types';

function TextInput({ name, inputRef }: TextInputProps) {
  return (
    <label className="input-block__label">
      <span className="input-block__title">{name}</span>
      <input
        ref={inputRef}
        type={'text'}
        placeholder={`enter ${name.toLowerCase()}`}
        className="input-block__input"
      ></input>
    </label>
  );
}

export default TextInput;
