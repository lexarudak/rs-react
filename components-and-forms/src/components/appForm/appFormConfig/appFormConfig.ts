const appFormConfig = {
  name: {
    name: 'Card name',
  },

  img: {
    name: 'Add image',
  },

  date: {
    name: 'Card date',
    from: '2023-01-01',
    to: '2024-12-31',
  },

  select: <{ name: string; values: [id: string, value: string][] }>{
    name: 'Card type',
    values: [
      ['1', 'Cool card'],
      ['2', 'Very cool card'],
      ['3', 'Extremely cool card'],
    ],
  },

  checkbox: <{ name: string; values: [id: string, value: string][] }>{
    name: 'Upgrade card title',
    values: [
      ['1', 'Bold'],
      ['2', 'Italic'],
      ['3', 'Bright color'],
    ],
  },

  radio: <{ name: string; values: [id: string, value: string][] }>{
    name: 'Add awesome border?',
    values: [
      ['1', 'Yes, of course!'],
      ['2', 'No, thanks'],
    ],
  },
};

export default appFormConfig;
