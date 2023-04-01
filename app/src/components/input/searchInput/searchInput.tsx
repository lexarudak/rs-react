import { MainState } from 'base/types';
import React, { useEffect } from 'react';

function SearchInput({ searchValue, changeSearchVal }: MainState) {
  useEffect(() => {
    changeSearchVal(localStorage.getItem('searchVal') || '');
  }, [changeSearchVal]);

  useEffect(() => {
    return localStorage.setItem('searchVal', searchValue);
  });

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
