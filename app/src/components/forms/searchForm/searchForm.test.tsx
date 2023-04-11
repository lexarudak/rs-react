import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Character } from 'base/types';
import fetchMock from 'jest-fetch-mock';
import React from 'react';
import SearchForm from './searchForm';
fetchMock.enableMocks();

fetchMock.enableMocks();

const { findByPlaceholderText } = screen;

const char: Character = {
  id: 0,
  name: 'Tsoy',
  status: 'Alive',
  species: '',
  type: 'immortal',
  gender: '',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
  episode: [],
  url: '',
  created: '',
};

describe('search input tests', () => {
  it('render test', async () => {
    fetchMock.once(JSON.stringify({ results: [char] }));
    render(<SearchForm setCards={jest.fn()} setIsLoading={jest.fn()} />);
    const search = await findByPlaceholderText('Search');
    expect(search).toBeInTheDocument();
  });

  it('setCards test', async () => {
    let arr: Character[] = [];
    const setCards = (cards: Character[]) => {
      arr = [...cards];
    };

    fetchMock.once(JSON.stringify({ results: [char] }));
    render(<SearchForm setCards={setCards} setIsLoading={jest.fn()} />);
    const search: HTMLInputElement = await findByPlaceholderText('Search');
    await userEvent.click(search);
    expect(arr[0].name).toEqual('Tsoy');
  });
});
