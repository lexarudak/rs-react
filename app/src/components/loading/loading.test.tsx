import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TestId from 'base/enums/testId';
import React from 'react';
import Loading from './loading';

const { getByTestId, getAllByAltText } = screen;

describe('loading', () => {
  test('render test', () => {
    render(<Loading />);
    expect(getByTestId(TestId.loading)).toBeInTheDocument();
  });

  test('rick test', () => {
    render(<Loading />);
    expect(getAllByAltText('rick')[0]).toBeInTheDocument();
  });

  test('portal test', () => {
    render(<Loading />);
    expect(getAllByAltText('portal')[0]).toBeInTheDocument();
  });
});
