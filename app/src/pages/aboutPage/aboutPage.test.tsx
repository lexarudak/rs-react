import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AboutPage } from 'pages';
import { store } from 'store';

const { getByText } = screen;

describe('about page', () => {
  it('render test', () => {
    render(
      <Provider store={store}>
        <AboutPage />
      </Provider>
    );
    expect(getByText('About Us')).toBeInTheDocument();
  });
});
