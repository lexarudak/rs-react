import { MultiInputProps, MultipleValueObj } from 'base/types';
import React from 'react';

function RadioInput({ config: { title, valuesArr }, register }: MultiInputProps) {
  return (
    <fieldset className="input-block__border">
      <legend className="input-block__border-title">{title}</legend>
      {valuesArr.map(({ id, text }: MultipleValueObj) => {
        return (
          <label className="input-block__label input-block__radio" key={id}>
            <input
              {...register}
              className="input-block__label-check"
              value={text}
              type="radio"
            ></input>
            <span className="input-block__label-text">{text}</span>
          </label>
        );
      })}
    </fieldset>
  );
}

export default RadioInput;
