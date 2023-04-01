import { DateInputProps } from 'base/types';
import React from 'react';

function DateInput({ config: { title, from, to }, register }: DateInputProps) {
  return (
    <label className="input-block__label">
      <span className="input-block__title">{title}</span>
      <input
        {...register}
        data-testid="date-input"
        type={'date'}
        className="date-input input-block__input"
        min={from}
        max={to}
      ></input>
    </label>
  );
}

export default DateInput;
