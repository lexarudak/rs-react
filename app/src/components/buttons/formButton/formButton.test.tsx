import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import FormButton from './formButton';

describe('form button tests', () => {
  let value = 0;

  const props: { name: string; callback: (event: React.MouseEvent) => void } = {
    name: 'title',
    callback: (event: React.MouseEvent) => {
      event;
      value = 1;
    },
  };

  test('render button test', () => {
    render(<FormButton {...props} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('render button name test', () => {
    render(<FormButton {...props} />);

    const button = screen.getByText('title');
    expect(button).toBeInTheDocument();
  });

  test('callback button test', () => {
    render(<FormButton {...props} />);

    const button = screen.getByText('title');
    expect(value).toEqual(0);
    fireEvent.click(button);
    expect(value).toEqual(1);
  });
});
