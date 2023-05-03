import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { OuterBanner } from 'components/banners';

const { getByText } = screen;

describe('banner', () => {
  test('render test', () => {
    render(<OuterBanner text={'test text'} />);
    expect(getByText('test text')).toBeInTheDocument();
  });
});
