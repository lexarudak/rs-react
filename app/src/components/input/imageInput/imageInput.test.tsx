import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TextInputProps } from 'base/types';
import React from 'react';
import ImageInput from './imageInput';

describe('image input tests', () => {
  const props: TextInputProps = {
    name: 'title',
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
});
