import { MultiInputProps, MultipleValueObj } from 'base/types';
import React from 'react';

function RadioInput({ name, valuesArr }: MultiInputProps) {
  return (
    <fieldset className="input-block__border">
      <legend className="input-block__border-title">{name}</legend>
      {valuesArr.map(({ id, text, ref }: MultipleValueObj) => {
        return (
          <label className="input-block__label input-block__radio" key={id}>
            <input
              className="input-block__label-check"
              name={name}
              value={text}
              id={name}
              type="radio"
              ref={ref}
            ></input>
            <span className="input-block__label-text">{text}</span>
          </label>
        );
      })}
    </fieldset>
  );
}

export default RadioInput;
