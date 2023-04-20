import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CloseButton } from 'components';
import { TestId } from 'models';

const { getByTestId } = screen;

describe('close button', () => {
  test('render test', () => {
    render(<CloseButton closeFn={jest.fn()} />);
    expect(getByTestId(TestId.closeButton)).toBeInTheDocument();
  });

  test('click test', async () => {
    let answer = 0;
    render(
      <CloseButton
        closeFn={function (): void {
          answer++;
        }}
      />
    );
    expect(answer).toEqual(0);
    await userEvent.click(getByTestId(TestId.closeButton));
    expect(answer).toEqual(1);
  });
});
