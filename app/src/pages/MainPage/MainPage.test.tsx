import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';
import { CHARACTERS, TestId } from 'models';
import { MainPage } from 'pages';
import { store } from 'store';

const { findByPlaceholderText, findByText, findByTestId } = screen;
const [CHARACTER_OBJ_1, CHARACTER_OBJ_2] = CHARACTERS;
const NO_CARDS = 'No cards';
const PLACEHOLDER = 'Search';
const ACTIVE_CLASS = 'active';

describe('main page work tests', () => {
  it('render empty page after reject', async () => {
    fetchMock.mockRejectOnce();
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    const noCards = await findByText(NO_CARDS);
    expect(noCards).toBeInTheDocument();
  });
  it('fetch two cards, click on it and close after that', async () => {
    fetchMock.once(JSON.stringify({ results: [CHARACTER_OBJ_1, CHARACTER_OBJ_2] }));
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    const search = await findByPlaceholderText(PLACEHOLDER);
    expect(search).toBeInTheDocument();
    const card = await findByText(CHARACTER_OBJ_1.name);
    const card2 = await findByText(CHARACTER_OBJ_2.name);
    expect(card).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
    expect(document.body).not.toHaveTextContent(NO_CARDS);
    fetchMock.mockClear();
    fetchMock.once(JSON.stringify(CHARACTER_OBJ_1));
    await userEvent.click(card);
    const bigCard = await findByText(CHARACTER_OBJ_1.type);
    expect(bigCard).toBeInTheDocument();
    const popup = await findByTestId(TestId.popup);
    expect(popup).toHaveClass(ACTIVE_CLASS);
    const closeBtn = await findByTestId(TestId.closeButton);
    await userEvent.click(closeBtn);
    expect(bigCard).toBeInTheDocument();
    expect(popup).not.toHaveClass(ACTIVE_CLASS);
  });
});
