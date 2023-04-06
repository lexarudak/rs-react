import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import SearchInput from './searchForm';

describe('search input tests', () => {
  const { getByPlaceholderText } = screen;

  it('render test', () => {
    render(<SearchInput setCards={jest.fn()} />);
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('change value test', async () => {
    let value = '';
    const setCards = (searchValue: string) => {
      value += searchValue;
    };
    render(<SearchInput searchValue={''} setCards={changeSearchVal} />);
    await userEvent.type(getByPlaceholderText('Search'), 'test text');
    expect(value).toEqual('test text');
  });

  it('init value test', async () => {
    render(<SearchInput searchValue={'init value'} changeSearchVal={jest.fn} />);
    expect(getByPlaceholderText('Search')).toHaveValue('init value');
  });
});
