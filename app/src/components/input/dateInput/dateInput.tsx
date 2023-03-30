import { DateInputProps } from 'base/types';
import React from 'react';

function DateInput({ name, from, to, inputRef }: DateInputProps) {
  return (
    <label className="input-block__label">
      <span className="input-block__title">{name}</span>
      <input
        data-testid="date-input"
        ref={inputRef}
        type={'date'}
        className="date-input input-block__input"
        name="date-input"
        min={from}
        max={to}
      ></input>
    </label>
  );
}

export default DateInput;
