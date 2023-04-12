import TestId from '../../../base/enums/testId';
import { DateInputProps } from 'base/models';
import React from 'react';
import inputStyles from '../inputs.module.scss';

function DateInput({ config: { title, from, to }, register }: DateInputProps) {
  return (
    <label className={inputStyles.block}>
      <span className={inputStyles.title}>{title}</span>
      <input
        {...register}
        data-testid={TestId.dateInput}
        type={'date'}
        className={inputStyles.input}
        min={from}
        max={to}
      ></input>
    </label>
  );
}

export default DateInput;
