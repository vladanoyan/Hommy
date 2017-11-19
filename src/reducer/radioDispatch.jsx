const list = [
  {
    name: '1',
    id: 1,
  },
  {
    name: '2',
    id: 2,
  },
  {
    name: '3',
    id: 3,
  },
  {
    name: '4',
    id: 4,
  },
  {
    name: '5',
    id: 5,
  },
];

const radioDispatch = (state = list, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return state;
    default:
      return state;
  }
};

export default radioDispatch;
