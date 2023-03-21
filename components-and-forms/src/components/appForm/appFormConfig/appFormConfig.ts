const appFormConfig = {
  name: {
    name: 'Card name',
  },

  img: {
    name: 'Add card image',
  },

  date: {
    name: 'Card date',
    from: '2023-01-01',
    to: '2023-12-31',
  },

  select: <{ name: string; values: [id: string, value: string][] }>{
    name: 'Card type',
    values: [
      ['1', 'cool card'],
      ['2', 'very cool card'],
      ['3', 'extremely cool card'],
    ],
  },

  checkbox: <{ name: string; values: [id: string, value: string][] }>{
    name: 'Upgrade the card',
    values: [
      ['1', '+ 5 health'],
      ['2', '+ 2 speed'],
      ['3', '+ 3 damage'],
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
