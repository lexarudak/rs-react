/* eslint-disable react-hooks/exhaustive-deps */
import { MainState } from 'base/types';
import React, { useEffect } from 'react';

function SearchInput(props: MainState) {
  useEffect(() => {
    props.changeSearchVal(localStorage.getItem('searchVal') || '');
  }, []);

  useEffect(() => {
    return localStorage.setItem('searchVal', props.searchValue);
  });

  return (
    <input
      type={'text'}
      placeholder={'Search'}
      className="search"
      value={props.searchValue}
      onChange={(event) => {
        props.changeSearchVal(event.target.value);
      }}
    ></input>
  );
}

export default SearchInput;
