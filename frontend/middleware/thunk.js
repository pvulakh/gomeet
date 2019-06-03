export const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') { // means our action is async
        return action(dispatch, getState); // invoke async action with dispatch
    }
    return next(action); // pass action to our next middleware
};