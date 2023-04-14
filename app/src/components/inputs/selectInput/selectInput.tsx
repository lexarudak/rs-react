import { SelectInputProps, SelectValueObj } from 'base/models';
import React from 'react';
import inputStyles from '../inputs.module.scss';

function SelectInput({ config: { title, valuesArr }, register }: SelectInputProps) {
  return (
    <label className={inputStyles.block}>
      <span className={inputStyles.title}>{title}</span>
      <select {...register} className={inputStyles.input} defaultValue={valuesArr[0].value}>
        {valuesArr.map(({ id, value }: SelectValueObj, index) => {
          return (
            <option value={value} key={id} disabled={index === 0}>
              {value}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export default SelectInput;
