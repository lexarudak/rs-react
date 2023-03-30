import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SelectInputProps } from 'base/types';
import React from 'react';
import SelectInput from './selectInput';

describe('popupWithText tests', () => {
  const props: SelectInputProps = {
    name: 'title',
    selectRef: React.createRef<HTMLSelectElement>(),
    valuesArr: [
      { id: 0, value: 'Select card type' },
      { id: 1, value: 'Cool card' },
    ],
  };

  test('render select test', () => {
    render(<SelectInput {...props} />);

    const select = screen.getByDisplayValue(props.valuesArr[0].value);
    expect(select).toBeInTheDocument();
  });

  test('render title test', () => {
    render(<SelectInput {...props} />);

    const title = screen.getByText(props.name);
    expect(title).toBeInTheDocument();
  });
});
