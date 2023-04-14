import SliceNames from '../../../base/enums/sliceNames';
import React, { useState } from 'react';
import style from './searchForm.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setSearchValue } from '../../../store/rickAndMorty/rickAndMortySlice';

function SearchForm() {
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector((state) => state[SliceNames.rickAndMorty]);
  const [currentValue, changeCurrentValue] = useState(searchValue);

  return (
    <form
      className={style.form}
      onSubmit={async (e) => {
        e.preventDefault();
        changeCurrentValue((...prev) => prev[0].trim());
        dispatch(setSearchValue(currentValue));
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
