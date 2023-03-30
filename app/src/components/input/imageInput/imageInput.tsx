import { TextInputProps } from 'base/types';
import React from 'react';

function ImageInput({ name, inputRef }: TextInputProps) {
  return (
    <label className="input-block__label">
      <span className="input-block__title">{name}</span>
      <input
        data-testid="image-input"
        className="input-block__img-input"
        ref={inputRef}
        type="file"
        name={name}
        accept="image/png, image/jpeg, image/jpg"
      ></input>
    </label>
  );
}

export default ImageInput;
