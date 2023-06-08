import React from 'react';
import { MultiInputProps, MultipleValueObj } from 'models';
import { inputStyles } from 'components';

const RadioInput = ({ config: { TITLE, VALUES_ARR }, register }: MultiInputProps) => {
  const fillRadioButtons = () =>
    VALUES_ARR.map(({ id, text }: MultipleValueObj) => (
      <label key={id}>
        <input {...register} className={inputStyles.hide} value={text} type="radio"></input>
        <span className={inputStyles.checkerText}>{text}</span>
      </label>
    ));

  return (
    <fieldset className={inputStyles.border}>
      <legend>{TITLE}</legend>
      {fillRadioButtons()}
    </fieldset>
  );
};

export default RadioInput;
