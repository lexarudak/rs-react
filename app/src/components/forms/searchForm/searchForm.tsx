import SliceNames from '../../../base/enums/sliceNames';
import { SearchBarProps } from '../../../base/models';
import React, { useState } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import style from './searchForm.module.scss';

function SearchForm({ fetchData }: SearchBarProps) {
  const { searchValue } = useAppSelector((state) => state[SliceNames.rickAndMorty]);
  const [currentValue, changeCurrentValue] = useState(searchValue);

  return (
    <form
      className={style.form}
      onSubmit={async (e) => {
        e.preventDefault();
        changeCurrentValue((...prev) => prev[0].trim());
        fetchData(currentValue);
      }}
    >
      <input
        type={'text'}
        placeholder={'Search'}
        className={style.input}
        value={currentValue}
        onChange={(event) => {
          changeCurrentValue(event.target.value);
        }}
      ></input>
    </form>
  );
}

export default SearchForm;
