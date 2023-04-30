import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';
import { MainCard } from 'components';

fetchMock.enableMocks();

const { getByText, queryByText } = screen;

const testObj = {
  id: 1,
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
    render(
      <MainCard character={testObj} setIsPopupShow={jest.fn()} fetchCharacterById={jest.fn()} />
    );
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
    let characterId = 0;
    let isPopupShow = false;
    const fetchCharacterById = (id: number) => {
      characterId = id;
    };

    const setIsPopupShow = (isShow: boolean) => {
      isPopupShow = isShow;
    };

    render(
      <MainCard
        character={testObj}
        fetchCharacterById={fetchCharacterById}
        setIsPopupShow={setIsPopupShow}
      />
    );
    expect(characterId).toEqual(0);
    expect(isPopupShow).toBeFalsy();

    await userEvent.click(getByText('John'));

    expect(characterId).toEqual(testObj.id);
    expect(isPopupShow).toBeTruthy();
  });
});
