const radioDispatch = (state = {}, action) => {
  switch (action.type) {
    case 'GET_RADIO_STATUS':
      return action.item;
    case 'GET_RADIO_STATUS_LISTING':
      return action.item;
    default:
      return state;
  }
};

export default radioDispatch;
