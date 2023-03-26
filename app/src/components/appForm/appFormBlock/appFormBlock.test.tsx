import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TextInputProps } from 'base/types';
import TextInput from '../../../components/input/textInput/textInput';
import React from 'react';
import AppFormBlock from './appFormBlock';

describe('form block tests', () => {
  const textInputProps: TextInputProps = {
    name: 'title',
    errorText: 'error text',
    inputRef: React.createRef(),
  };

  test('render form block test', () => {
    const props: { inputBlock: React.Component; isValid: boolean } = {
      inputBlock: new TextInput(textInputProps),
      isValid: true,
    };
    render(<AppFormBlock {...props} />);

    const block = screen.getByText('title');
    expect(block).toBeInTheDocument();
    const errorText = screen.getByText('error text');
    expect(errorText).not.toHaveClass('app-form__error-text_active');
  });

  test('render form block text error test', () => {
    const props: { inputBlock: React.Component; isValid: boolean } = {
      inputBlock: new TextInput(textInputProps),
      isValid: false,
    };
    render(<AppFormBlock {...props} />);

    const errorText = screen.getByText('error text');
    expect(errorText).toHaveClass('app-form__error-text_active');
  });
});
