import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MultiInputProps } from 'base/types';
import React from 'react';
import CheckboxInput from './checkboxInput';

describe('checkbox input tests', () => {
  const props: MultiInputProps = {
    name: 'title',
    valuesArr: [
      { id: 1, text: 'first', ref: React.createRef<HTMLInputElement>() },
      { id: 2, text: 'second', ref: React.createRef<HTMLInputElement>() },
    ],
  };

  test('render input test', () => {
    render(<CheckboxInput {...props} />);

    const firstVal = screen.getByText('first');
    const secVal = screen.getByText('second');
    expect(firstVal).toBeInTheDocument();
    expect(secVal).toBeInTheDocument();
  });

  test('init state test', () => {
    render(<CheckboxInput {...props} />);

    const firstVal = screen.getByText('first');
    const secVal = screen.getByText('second');
    expect(firstVal).not.toHaveAttribute('checked');
    expect(secVal).not.toHaveAttribute('checked');
  });

  test('render title test', () => {
    render(<CheckboxInput {...props} />);

    const title = screen.getByText(props.name);
    expect(title).toBeInTheDocument();
  });
});
