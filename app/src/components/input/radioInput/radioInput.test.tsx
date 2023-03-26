import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MultiInputProps } from 'base/types';
import React from 'react';
import RadioInput from './radioInput';

describe('radio buttons tests', () => {
  const props: MultiInputProps = {
    name: 'title',
    errorText: 'error text',
    values: [
      ['1', 'first', React.createRef()],
      ['2', 'second', React.createRef()],
    ],
  };

  test('render input test', () => {
    render(<RadioInput {...props} />);

    const firstVal = screen.getByText('first');
    const secVal = screen.getByText('second');
    expect(firstVal).toBeInTheDocument();
    expect(secVal).toBeInTheDocument();
  });

  test('init state test', () => {
    render(<RadioInput {...props} />);

    const firstVal = screen.getByText('first');
    const secVal = screen.getByText('second');
    expect(firstVal).not.toHaveAttribute('checked');
    expect(secVal).not.toHaveAttribute('checked');
  });

  test('render title test', () => {
    render(<RadioInput {...props} />);

    const title = screen.getByText(props.name);
    expect(title).toBeInTheDocument();
  });

  test('not render errorText test', () => {
    render(<RadioInput {...props} />);

    const textErrorText = screen.queryByText(props.errorText);
    expect(textErrorText).not.toBeInTheDocument();
  });

  test('get error text', () => {
    const input = new RadioInput(props);
    expect(input._errorText).toEqual('error text');
    expect(input._errorText).not.toEqual('error text ');
  });
});
