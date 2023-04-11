import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './card';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Character } from 'base/types';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

const { getByText, queryByText } = screen;

const testObj = {
  id: 0,
  name: 'John',
  status: 'cool',
  species: 'test_species',
  type: 'test_type',
  gender: 'test_gender',
  origin: {
    name: 'test_origin',
    url: '',
  },
  location: {
    name: 'test_location',
    url: '',
  },
  image: '',
  episode: [],
  url: '',
  created: '',
};

describe('card', () => {
  test('render card text', () => {
    render(<Card character={testObj} setActiveCard={jest.fn()} setIsPopupShow={jest.fn()} />);
    expect(getByText('cool')).toBeInTheDocument();
    expect(getByText('John')).toBeInTheDocument();
    expect(queryByText('test_species')).not.toBeInTheDocument();
    expect(queryByText('test_type')).not.toBeInTheDocument();
    expect(queryByText('test_gender')).not.toBeInTheDocument();
    expect(queryByText('test_origin')).not.toBeInTheDocument();
    expect(queryByText('test_location')).not.toBeInTheDocument();
  });

  test('click card text', async () => {
    fetchMock.once(JSON.stringify(testObj));
    let characterDef: Character | undefined | string = undefined;
    let isPopupShow = false;
    const setActiveCard = (character: Character | undefined | string) => {
      characterDef = character;
    };

    const setIsPopupShow = (isShow: boolean) => {
      isPopupShow = isShow;
    };

    render(
      <Card character={testObj} setActiveCard={setActiveCard} setIsPopupShow={setIsPopupShow} />
    );
    expect(characterDef).toBeUndefined();
    expect(isPopupShow).toBeFalsy();

    await userEvent.click(getByText('John'));

    expect(characterDef).not.toBeUndefined();
    expect(characterDef).toEqual(testObj);
    expect(isPopupShow).toBeTruthy();
  });
});
