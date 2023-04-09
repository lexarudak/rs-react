import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Card from './card';
import userEvent from '@testing-library/user-event';
import { Character } from 'base/types';

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
    render(<Card character={testObj} setActiveCard={jest.fn()} />);

    expect(getByText('cool')).toBeInTheDocument();
    expect(getByText('John')).toBeInTheDocument();
    expect(queryByText('test_species')).not.toBeInTheDocument();
    expect(queryByText('test_type')).not.toBeInTheDocument();
    expect(queryByText('test_gender')).not.toBeInTheDocument();
    expect(queryByText('test_origin')).not.toBeInTheDocument();
    expect(queryByText('test_location')).not.toBeInTheDocument();
  });

  test('click card text', async () => {
    let characterDef: Character | undefined = undefined;
    const setActiveCard = (character: Character | undefined) => {
      characterDef = character;
    };
    render(<Card character={testObj} setActiveCard={setActiveCard} />);
    expect(characterDef).toBeUndefined();
    await userEvent.click(getByText('John'));

    expect(characterDef).not.toBeUndefined();
    expect(characterDef).toEqual(testObj);
  });
});
