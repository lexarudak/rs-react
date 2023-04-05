import Api from '../../api/api';
import CharacterSearchParam from '../../base/enums/params';
import { MainState } from '../../base/types';
import React, { useEffect, useState } from 'react';

function SearchBar({ setCards }: MainState) {
  const [searchValue, changeSearchVal] = useState(localStorage.getItem('searchVal') || '');
  const [fetchData, setFetchData] = useState(searchValue);

  useEffect(() => {
    async function getCards() {
      const cards = await Api.getAllCharactersByParam(CharacterSearchParam.name, fetchData);
      setCards(cards);
    }
    getCards();
  }, [fetchData, setCards]);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setFetchData(searchValue);
        localStorage.setItem('searchVal', searchValue);
      }}
    >
      <input
        type={'text'}
        placeholder={'Search'}
        className="search"
        value={searchValue}
        onChange={(event) => {
          changeSearchVal(event.target.value);
        }}
      ></input>
    </form>
  );
}

export default SearchBar;
