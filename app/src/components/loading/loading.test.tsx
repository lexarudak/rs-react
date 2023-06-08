import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Alts, TestId } from 'models';
import { Loading } from 'components';

const { getByTestId, getAllByAltText } = screen;

describe('loading', () => {
  test('render test', () => {
    render(<Loading />);
    expect(getByTestId(TestId.loading)).toBeInTheDocument();
  });

  test('rick test', () => {
    render(<Loading />);
    expect(getAllByAltText(Alts.rickAlt)[0]).toBeInTheDocument();
  });

  test('portal test', () => {
    render(<Loading />);
    expect(getAllByAltText(Alts.portalAlt)[0]).toBeInTheDocument();
  });
});
