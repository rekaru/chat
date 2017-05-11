const mainReducer = (state= {}, action) => {
  switch (action.type) {
    case 'ADD_MSG':
      return Object.assign({}, state, {
        messages: [...state.messages, {user: action.user, text: action.text}]
      });
    case 'ADD_USER':
      return Object.assign({}, state, {
        user: action.user
      });
    default:
      return state
  }

};

export default mainReducer;
