export const addMsg = (text) => {
    return {
        type: 'ADD_MSG',
        user: 'guest',
        text
    }
}