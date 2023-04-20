import React from 'react';
import { SelectInputProps, SelectValueObj } from 'models';
import { inputStyles } from 'components';

const SelectInput = ({ config: { TITLE, VALUES_ARR }, register }: SelectInputProps) => {
  const fillOptions = () =>
    VALUES_ARR.map(({ id, value }: SelectValueObj, index) => (
      <option value={value} key={id} disabled={index === 0}>
        {value}
      </option>
    ));

  return (
    <label className={inputStyles.block}>
      <span className={inputStyles.title}>{TITLE}</span>
      <select {...register} className={inputStyles.input} defaultValue={VALUES_ARR[0].value}>
        {fillOptions()}
      </select>
    </label>
  );
};

export default SelectInput;
