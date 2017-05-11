export const addMsg = (text, user) => {
  return {
    type: 'ADD_MSG',
    user,
    text
  }
};

export const addUser = user => {
  return {
    type: 'ADD_USER',
    user
  }
};
