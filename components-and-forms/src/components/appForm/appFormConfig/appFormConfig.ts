import { MultiInputProps } from 'base/types';

const appFormConfig = {
  name: {
    name: 'Card name',
    error: 'please enter a name',
  },

  img: {
    name: 'Add image',
    error: 'please, add a picture',
  },

  date: {
    name: 'Card date',
    from: '2023-01-01',
    to: '2024-12-31',
    error: 'please, select a date',
  },

  select: <MultiInputProps>{
    name: 'Card type',
    values: [
      ['1', 'Cool card'],
      ['2', 'Very cool card'],
      ['3', 'Extremely cool card'],
    ],
    error: '0e',
  },

  checkbox: <MultiInputProps>{
    name: 'Upgrade card title',
    values: [
      ['1', 'Bold'],
      ['2', 'Italic'],
      ['3', 'Bright color'],
    ],
    error: 'choose at least 1 item',
  },

  radio: <MultiInputProps>{
    name: 'Add awesome border?',
    values: [
      ['1', 'Yes, of course!'],
      ['2', 'No, thanks'],
    ],
    error: 'please, make a choice',
  },
};

export default appFormConfig;
