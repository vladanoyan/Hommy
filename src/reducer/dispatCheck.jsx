const initialState = {
  isChecked: false,
};
const dispatCheck = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK':
      console.log('true');
      return {
        isChecked: !state.isChecked,
      };
    default:
      return state;
  }
};

export default dispatCheck;
