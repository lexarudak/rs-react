import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DateInputProps } from 'base/types';
import React from 'react';
import DateInput from './dateInput';

describe('popupWithText tests', () => {
  const props: DateInputProps = {
    name: 'title',
    errorText: 'error text',
    from: '01-01-2000',
    to: '01-01-2001',
    inputRef: React.createRef(),
  };

  test('render date test', () => {
    render(<DateInput {...props} />);

    const dateInput = screen.getByTestId('date-input');
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('min');
    expect(dateInput).toHaveAttribute('max');
  });

  test('render title test', () => {
    render(<DateInput {...props} />);

    const title = screen.getByText(props.name);
    expect(title).toBeInTheDocument();
  });

  test('not render errorText test', () => {
    render(<DateInput {...props} />);

    const textErrorText = screen.queryByText(props.errorText);
    expect(textErrorText).not.toBeInTheDocument();
  });
});
