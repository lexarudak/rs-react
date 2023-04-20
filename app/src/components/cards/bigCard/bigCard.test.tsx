import React from 'react';
import '@testing-library/jest-dom';
import { BigCard } from 'components';
import { render, screen } from '@testing-library/react';
import { CHARACTERS } from 'models';

const { getByText, getByRole } = screen;
const [CHARACTER] = CHARACTERS;
const {
  name,
  status,
  species,
  type,
  gender,
  origin: { name: origin },
  location: { name: location },
} = CHARACTER;

describe('big card', () => {
  test('render card text', () => {
    render(<BigCard {...CHARACTER} />);

    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(status)).toBeInTheDocument();
    expect(getByText(species)).toBeInTheDocument();
    expect(getByText(type)).toBeInTheDocument();
    expect(getByText(gender)).toBeInTheDocument();
    expect(getByText(origin)).toBeInTheDocument();
    expect(getByText(location)).toBeInTheDocument();
    expect(getByRole<HTMLImageElement>('img')).toBeInTheDocument();
  });
});
