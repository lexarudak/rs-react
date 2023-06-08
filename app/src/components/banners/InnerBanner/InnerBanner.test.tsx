import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { InnerBanner } from 'components';

const { getByText } = screen;

describe('innerBanner', () => {
  test('render test', () => {
    render(<InnerBanner text={'test text'} />);
    expect(getByText('test text')).toBeInTheDocument();
  });
});
