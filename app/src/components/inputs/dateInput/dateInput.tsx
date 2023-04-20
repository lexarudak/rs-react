import React from 'react';
import { TestId, DateInputProps } from 'models';
import { inputStyles } from 'components';

const DateInput = ({ config: { TITLE, FROM, TO }, register }: DateInputProps) => {
  return (
    <label className={inputStyles.block}>
      <span className={inputStyles.title}>{TITLE}</span>
      <input
        {...register}
        data-testid={TestId.dateInput}
        type={'date'}
        className={inputStyles.input}
        min={FROM}
        max={TO}
      ></input>
    </label>
  );
};

export default DateInput;
