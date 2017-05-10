const msg = (state = [
    {
        user: 'Max',
        text: 'Hello'
    },
    {
        user: 'Alex',
        text: 'Hey'
    }
], action) => {
    switch (action.type) {
        case 'ADD_MSG':
            return [...state, {
                user: action.user,
                text: action.text
            }];
        default:
            return state

    }
};

export default msg;