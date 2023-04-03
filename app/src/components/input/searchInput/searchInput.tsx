import { MainState } from 'base/types';
import React, { useEffect, useRef } from 'react';

function SearchInput({ searchValue, changeSearchVal }: MainState) {
  const searchValueState = useRef(searchValue);

  useEffect(() => {
    searchValueState.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => localStorage.setItem('searchVal', searchValueState.current);
  }, []);

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
