import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchForm from './searchForm';
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

const { getByPlaceholderText } = screen;

describe('search input tests', () => {
  it('render test', () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));
    render(<SearchForm setCards={jest.fn()} setIsLoading={jest.fn()} />);
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
