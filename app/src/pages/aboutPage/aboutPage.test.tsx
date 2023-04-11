import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import AboutPage from './aboutPage';

const { getByText } = screen;

describe('about page', () => {
  it('render test', () => {
    render(<AboutPage changeName={jest.fn()} />);
    expect(getByText('About Us')).toBeInTheDocument();
  });
});
