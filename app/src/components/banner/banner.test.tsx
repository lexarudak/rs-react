import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Banner from './banner';

const { getByText } = screen;

describe('banner', () => {
  test('render test', () => {
    render(<Banner text={'test text'} />);
    expect(getByText('test text')).toBeInTheDocument();
  });
});
