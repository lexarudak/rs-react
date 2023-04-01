import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './footer';

describe('search input tests', () => {
  const { getByText } = screen;

  it('render test', () => {
    render(<Footer />);
    expect(getByText('2023 (c)')).toBeInTheDocument();
  });
});
