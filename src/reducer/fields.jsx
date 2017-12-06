const defaultState = {
  images: [],
};

export default function images(state = defaultState, action) {
  switch (action.type) {
    case 'UP_PHOTO':
      return [
        ...state,
        {
          selectedImage: action.image,
        },
      ];
    default:
      return state;
  }
}
