import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TextInputProps } from 'base/types';
import React from 'react';
import ImageInput from './imageInput';

describe('popupWithText tests', () => {
  const props: TextInputProps = {
    name: 'title',
    errorText: 'error text',
    inputRef: React.createRef(),
  };

  test('render input test', () => {
    render(<ImageInput {...props} />);

    const dateInput = screen.getByTestId('image-input');
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('accept');
  });

  test('render title test', () => {
    render(<ImageInput {...props} />);

    const title = screen.getByText(props.name);
    expect(title).toBeInTheDocument();
  });

  test('not render errorText test', () => {
    render(<ImageInput {...props} />);

    const textErrorText = screen.queryByText(props.errorText);
    expect(textErrorText).not.toBeInTheDocument();
  });

  test('get error text', () => {
    const input = new ImageInput(props);
    expect(input._errorText).toEqual('error text');
    expect(input._errorText).not.toEqual('error text ');
  });
});
