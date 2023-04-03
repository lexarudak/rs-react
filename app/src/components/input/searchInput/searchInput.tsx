import { MainState } from 'base/types';
import React, { useEffect, useLayoutEffect } from 'react';

function SearchInput({ searchValue, changeSearchVal }: MainState) {
  useLayoutEffect(() => {
    changeSearchVal(localStorage.getItem('searchVal') || '');
  }, [changeSearchVal]);

  useEffect(() => {
    return localStorage.setItem('searchVal', searchValue);
  }, [searchValue]);

  return (
    <input
      type={'text'}
      placeholder={'Search'}
      className="search"
      value={searchValue}
      onChange={(event) => {
        changeSearchVal(event.target.value);
      }}
    ></input>
  );
}

export default SearchInput;
