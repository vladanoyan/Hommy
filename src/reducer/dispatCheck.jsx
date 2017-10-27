const initialState = {
  checked: false,
};
const dispatCheck = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK':
      alert('gg');
      return {
        checked: true,
      };
    default:
      return state;
  }
};

export default dispatCheck;
