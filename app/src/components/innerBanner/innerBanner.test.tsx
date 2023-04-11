import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import InnerBanner from './innerBanner';

const { getByText } = screen;

describe('innerBanner', () => {
  test('render test', () => {
    render(<InnerBanner text={'test text'} />);
    expect(getByText('test text')).toBeInTheDocument();
  });
});
