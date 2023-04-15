import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Character } from 'base/models';
import React from 'react';
import MainPage from './mainPage';
import { Provider } from 'react-redux';
import { store } from '../../store';
import userEvent from '@testing-library/user-event';
import TestId from 'base/enums/testId';
import fetchMock from 'jest-fetch-mock';

const { findByPlaceholderText, findByText, findByTestId } = screen;

const [tsoy, vata]: Character[] = [
  {
    id: 1,
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
  },
  {
    id: 2,
    name: 'Vata',
    status: 'Alive',
    species: '',
    type: 'Dog',
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
  },
];

describe('main page work tests', () => {
  it('render empty page after reject', async () => {
    fetchMock.mockRejectOnce();
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    const noCards = await findByText('No cards');
    expect(noCards).toBeInTheDocument();
  });

  it('fetch two cards, click on it and close after that', async () => {
    fetchMock.once(JSON.stringify({ results: [tsoy, vata] }));
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    const search = await findByPlaceholderText('Search');
    expect(search).toBeInTheDocument();

    const card = await findByText(tsoy.name);
    const card2 = await findByText(vata.name);
    expect(card).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
    expect(document.body).not.toHaveTextContent('No Cards');

    fetchMock.mockClear();
    fetchMock.once(JSON.stringify(tsoy));
    await userEvent.click(card);

    const bigCard = await findByText(tsoy.type);
    expect(bigCard).toBeInTheDocument();
    const popup = await findByTestId(TestId.popup);
    expect(popup).toHaveClass('active');

    const closeBtn = await findByTestId(TestId.closeButton);
    await userEvent.click(closeBtn);
    expect(bigCard).toBeInTheDocument();
    expect(popup).not.toHaveClass('active');
  });
});
