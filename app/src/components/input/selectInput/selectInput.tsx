import { SelectInputProps, SelectValueObj } from 'base/types';
import React from 'react';

function SelectInput({ name, valuesArr, selectRef }: SelectInputProps) {
  return (
    <label className="input-block__label">
      <span className="input-block__title">{name}</span>
      <select
        name={name}
        className="input-block__input"
        ref={selectRef}
        defaultValue={valuesArr[0].value}
      >
        {valuesArr.map(({ id, value }: SelectValueObj, index) => {
          return (
            <option value={value} key={id} disabled={index === 0 ? true : false}>
              {value}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export default SelectInput;
