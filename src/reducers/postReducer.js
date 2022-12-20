const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return action.payload;
    case 'CREATE_POST':
      return [action.payload, ...state];
    case 'DELETE_POST':
      return state.filter(post => post.id !== action.payload);
    case 'UPDATE_POST':
      return state.map(post =>
        post.id === action.payload.id ? action.payload : post
      );
    default:
      return state;
  }
};

export default postReducer;
