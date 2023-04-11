import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import BigCard from './bigCard';

const { getByText, getByRole } = screen;

const testObj = {
  id: 0,
  name: 'John',
  status: 'cool',
  species: 'test_species',
  type: 'test_type',
  gender: 'test_gender',
  origin: {
    name: 'test_origin',
    url: '',
  },
  location: {
    name: 'test_location',
    url: '',
  },
  image: 'url',
  episode: [],
  url: '',
  created: '',
};

describe('big card', () => {
  test('render card text', () => {
    render(<BigCard {...testObj} />);

    expect(getByText('cool')).toBeInTheDocument();
    expect(getByText('John')).toBeInTheDocument();
    expect(getByText('test_species')).toBeInTheDocument();
    expect(getByText('test_type')).toBeInTheDocument();
    expect(getByText('test_gender')).toBeInTheDocument();
    expect(getByText('test_origin')).toBeInTheDocument();
    expect(getByText('test_location')).toBeInTheDocument();
    expect(getByRole<HTMLImageElement>('img')).toBeInTheDocument();
  });
});
