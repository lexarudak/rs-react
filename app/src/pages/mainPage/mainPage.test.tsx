import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import React from 'react';
import MainPage from './mainPage';
import fetchMock from 'jest-fetch-mock';
import { Character } from 'base/types';
fetchMock.enableMocks();

const { getByPlaceholderText } = screen;

const char: Character = {
  id: 0,
  name: 'Tsoy',
  status: 'Alive',
  species: '',
  type: '',
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

describe('main page', () => {
  it('render test', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([]));
    render(<MainPage changeName={jest.fn()} />);
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  // it('usage test', async () => {
  //   fetchMock.mockResponseOnce(JSON.stringify([]));
  //   act(() => {
  //     render(<MainPage changeName={jest.fn()} />);
  //   });

  //   expect(getByPlaceholderText('Search')).toBeInTheDocument();
  // });
});
