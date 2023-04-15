import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FormPageCard } from 'base/models';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import FormCard from './formCard';

describe('form card tests', () => {
  const props: FormPageCard = {
    id: '1',
    name: 'card',
    date: '01-01-2023',
    select: 'cool card',
    checkbox: ['bold', 'italic'],
    radio: 'Yes, of course!',
    imageSrc: '/public/plants/1/1.jpg',
  };

  beforeEach(() => {
    render(
      <Provider store={store}>
        <FormCard {...props} />
      </Provider>
    );
  });

  test('render card test', () => {
    const card = screen.getByTestId('form-card');
    expect(card).toBeInTheDocument();
  });

  test('render card name test', () => {
    const card = screen.getByTestId('form-card');
    expect(card).toBeInTheDocument();
    const name = screen.getByText('card');
    expect(name).toBeInTheDocument();
  });

  test('render date name test', () => {
    const date = screen.getByText('01-01-2023');
    expect(date).toBeInTheDocument();
  });

  test('render title style test', () => {
    const titleStyle = screen.getByText('bold | italic');
    expect(titleStyle).toBeInTheDocument();
  });

  test('render border test', () => {
    const border = screen.getByText('Yes');
    expect(border).toBeInTheDocument();
    const card = screen.getByTestId('form-card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('border');
  });

  test('render img test', () => {
    const img: HTMLImageElement = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img.src.includes(props.imageSrc)).toBeTruthy();
  });
});
