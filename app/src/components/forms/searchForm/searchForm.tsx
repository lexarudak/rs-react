import Api from '../../../api/api';
import CharacterSearchParam from '../../../base/enums/params';
import { SearchBarProps } from '../../../base/types';
import React, { useEffect, useState } from 'react';

function SearchForm({ setCards, setIsLoading }: SearchBarProps) {
  const [searchValue, changeSearchVal] = useState(localStorage.getItem('searchVal') || '');
  const [fetchData, setFetchData] = useState(searchValue);

  useEffect(() => {
    async function getCards() {
      setIsLoading(true);
      const cards = await Api.getAllCharactersByParam(CharacterSearchParam.name, fetchData);
      setCards(cards);
      setIsLoading(false);
    }
    getCards();
  }, [fetchData, setCards, setIsLoading]);

  return (
    <form
      className="search-bar"
      onSubmit={async (e) => {
        e.preventDefault();
        changeSearchVal((...prev) => prev[0].trim());
        setFetchData(searchValue);
        localStorage.setItem('searchVal', searchValue);
      }}
    >
      <input
        type={'text'}
        placeholder={'Search'}
        className="search-bar__input"
        value={searchValue}
        onChange={(event) => {
          changeSearchVal(event.target.value);
        }}
      ></input>
    </form>
  );
}

export default SearchForm;
