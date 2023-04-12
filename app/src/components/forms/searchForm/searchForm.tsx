import React, { useState } from 'react';
import { SearchBarProps } from '../../../base/models';
import style from './searchForm.module.scss';

function SearchForm({ fetchData }: SearchBarProps) {
  const [searchValue, changeSearchVal] = useState(localStorage.getItem('searchVal') || '');

  return (
    <form
      className={style.form}
      onSubmit={async (e) => {
        e.preventDefault();
        changeSearchVal((...prev) => prev[0].trim());
        fetchData(searchValue);
        localStorage.setItem('searchVal', searchValue);
      }}
    >
      <input
        type={'text'}
        placeholder={'Search'}
        className={style.input}
        value={searchValue}
        onChange={(event) => {
          changeSearchVal(event.target.value);
        }}
      ></input>
    </form>
  );
}

export default SearchForm;
