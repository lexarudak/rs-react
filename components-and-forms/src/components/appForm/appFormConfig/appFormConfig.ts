import { MultiInputProps, SelectInputProps } from 'base/types';
import React from 'react';

const appFormConfig = {
  name: {
    name: 'Card name',
    errorText: 'minimum 3 characters, please',
    inputRef: React.createRef<HTMLInputElement>(),
  },

  image: {
    name: 'Add image',
    errorText: 'please, add a picture',
    inputRef: React.createRef<HTMLInputElement>(),
  },

  date: {
    name: 'Card date',
    from: '2023-01-01',
    to: '2024-12-31',
    errorText: 'expected day 2023 or 2024',
    inputRef: React.createRef<HTMLInputElement>(),
  },

  select: <SelectInputProps>{
    name: 'Card type',
    values: [
      ['1', 'Select card type'], // init point (disabled)
      ['2', 'Cool card'],
      ['3', 'Very cool card'],
      ['4', 'Extremely cool card'],
    ],
    errorText: 'please, select card type',
    selectRef: React.createRef<HTMLSelectElement>(),
  },

  checkbox: <MultiInputProps>{
    name: 'Upgrade card title',
    values: [
      ['1', 'Bold', React.createRef<HTMLInputElement>()],
      ['2', 'Italic', React.createRef<HTMLInputElement>()],
      ['3', 'Bright color', React.createRef<HTMLInputElement>()],
    ],
    errorText: 'choose at least 1 item',
  },

  radio: <MultiInputProps>{
    name: 'Add border?',
    values: [
      ['1', 'Yes, of course!', React.createRef<HTMLInputElement>()],
      ['2', 'No, thanks', React.createRef<HTMLInputElement>()],
    ],
    errorText: 'please, make a choice',
  },
};

export default appFormConfig;
