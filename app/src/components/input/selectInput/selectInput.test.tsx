import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SelectInputProps } from 'base/types';
import React from 'react';
import SelectInput from './selectInput';

describe('popupWithText tests', () => {
  const props: SelectInputProps = {
    name: 'title',
    errorText: 'error text',
    selectRef: React.createRef<HTMLSelectElement>(),
    values: [
      ['1', 'first'],
      ['2', 'second'],
    ],
  };

  test('render select test', () => {
    render(<SelectInput {...props} />);

    const select = screen.getByDisplayValue(props.values[0][1]);
    expect(select).toBeInTheDocument();
  });

  test('render title test', () => {
    render(<SelectInput {...props} />);

    const title = screen.getByText(props.name);
    expect(title).toBeInTheDocument();
  });

  test('not render errorText test', () => {
    render(<SelectInput {...props} />);

    const textErrorText = screen.queryByText(props.errorText);
    expect(textErrorText).not.toBeInTheDocument();
  });

  test('get error text', () => {
    const input = new SelectInput(props);
    expect(input._errorText).toEqual(props.errorText);
  });
});
