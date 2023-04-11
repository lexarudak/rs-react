import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Character } from 'base/types';
import React from 'react';
import MainPage from './mainPage';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

const { findByPlaceholderText, findByText } = screen;

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

describe('main page', () => {
  it('render test', async () => {
    fetchMock.once(JSON.stringify({ results: [char] }));
    render(<MainPage changeName={jest.fn()} />);
    const search = await findByPlaceholderText('Search');
    expect(search).toBeInTheDocument();
  });

  it('success test', async () => {
    fetchMock.once(JSON.stringify({ results: [char] }));
    render(<MainPage changeName={jest.fn()} />);
    const card = await findByText(char.name);
    expect(card).toBeInTheDocument();
    expect(document.body).not.toHaveTextContent('No Cards');
  });

  it('empty test', async () => {
    fetchMock.once(JSON.stringify({ results: [] }));
    render(<MainPage changeName={jest.fn()} />);
    const noCards = await findByText('No Cards');
    expect(document.body).toHaveTextContent('No Cards');
    expect(noCards).toBeInTheDocument();
  });
});
