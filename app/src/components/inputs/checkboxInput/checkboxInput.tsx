import React from 'react';
import { MultiInputProps, MultipleValueObj } from 'models';
import { inputStyles } from 'components';

const CheckboxInput = ({ config: { TITLE, VALUES_ARR }, register }: MultiInputProps) => {
  const fillCheckbox = () =>
    VALUES_ARR.map(({ id, text }: MultipleValueObj) => (
      <label key={id}>
        <input {...register} className={inputStyles.hide} value={text} type="checkbox"></input>
        <span className={inputStyles.checkerText}>{text}</span>
      </label>
    ));

  return (
    <fieldset className={inputStyles.border}>
      <legend>{TITLE}</legend>
      {fillCheckbox()}
    </fieldset>
  );
};

export default CheckboxInput;
