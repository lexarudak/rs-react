import { TextInputProps } from 'base/types';
import React from 'react';

function ImageInput({ config: { title }, register }: TextInputProps) {
  return (
    <label className="input-block__label">
      <span className="input-block__title">{title}</span>
      <input
        {...register}
        data-testid="image-input"
        className="input-block__img-input"
        type="file"
        accept="image/png, image/jpeg, image/jpg"
      ></input>
    </label>
  );
}

export default ImageInput;
