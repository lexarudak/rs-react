import { MultiInputProps, MultipleValueObj } from 'base/types';
import React from 'react';

function CheckboxInput({ name, valuesArr }: MultiInputProps) {
  return (
    <fieldset className="input-block__border">
      <legend className="input-block__border-title">{name}</legend>
      {valuesArr.map(({ id, text, ref }: MultipleValueObj) => {
        return (
          <label className="input-block__label input-block__checkbox" key={id}>
            <input
              className="input-block__label-check"
              name={name}
              value={text}
              ref={ref}
              type="checkbox"
            ></input>
            <span className="input-block__label-text">{text}</span>
          </label>
        );
      })}
    </fieldset>
  );
}

export default CheckboxInput;
