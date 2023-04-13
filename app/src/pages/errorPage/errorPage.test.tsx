import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import ErrorPage from './errorPage';
import { store } from '../../store';

const { getByText } = screen;

describe('error page', () => {
  it('render test', () => {
    render(
      <Provider store={store}>
        <ErrorPage />
      </Provider>
    );
    expect(getByText('404 page')).toBeInTheDocument();
  });
});
