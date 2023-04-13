import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import AboutPage from './aboutPage';
import { store } from '../../store';
import { Provider } from 'react-redux';

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
