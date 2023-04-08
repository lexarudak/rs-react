import { MultiInputProps, MultipleValueObj } from 'base/types';
import React from 'react';
import inputStyles from '../inputs.module.scss';

function CheckboxInput({ config: { title, valuesArr }, register }: MultiInputProps) {
  return (
    <fieldset className={inputStyles.border}>
      <legend>{title}</legend>
      {valuesArr.map(({ id, text }: MultipleValueObj) => {
        return (
          <label key={id}>
            <input {...register} className={inputStyles.hide} value={text} type="checkbox"></input>
            <span className={inputStyles.checkerText}>{text}</span>
          </label>
        );
      })}
    </fieldset>
  );
}

export default CheckboxInput;
