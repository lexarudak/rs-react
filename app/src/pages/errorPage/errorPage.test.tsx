import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ErrorPage from './errorPage';

const { getByText } = screen;

describe('error page', () => {
  it('render test', () => {
    render(<ErrorPage changeName={jest.fn()} />);
    expect(getByText('404 page')).toBeInTheDocument();
  });
});
