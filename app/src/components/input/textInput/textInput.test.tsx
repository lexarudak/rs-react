import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TextInputProps } from 'base/types';
import React from 'react';
import TextInput from './textInput';

describe('popupWithText tests', () => {
  const props: TextInputProps = {
    name: 'title',
    errorText: 'error text',
    inputRef: React.createRef(),
  };

  test('render input test', () => {
    render(<TextInput {...props} />);

    const textInput = screen.getByRole('textbox');
    expect(textInput).toBeInTheDocument();
    expect(textInput).toHaveAttribute('placeholder');
  });

  test('render title test', () => {
    render(<TextInput {...props} />);

    const textTitle = screen.getByText(props.name);
    expect(textTitle).toBeInTheDocument();
  });

  test('not render errorText test', () => {
    render(<TextInput {...props} />);

    const textErrorText = screen.queryByText(props.errorText);
    expect(textErrorText).not.toBeInTheDocument();
  });

  test('input value test', () => {
    render(<TextInput {...props} />);

    const textInput = screen.getByRole('textbox');
    expect(textInput).toBeInTheDocument();

    if (props.inputRef.current) props.inputRef.current.value = '123';
    expect(textInput).toHaveValue('123');
  });
});
