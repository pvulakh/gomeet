import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { logout } from './actions/session_actions';
// import { fetchGroups, fetchGroup, createGroup, updateGroup, deleteGroup } from './actions/group_actions';
// import { createMembership, deleteMembership } from './actions/group_actions';
// import { fetchGroupEvents, fetchAllEvents, fetchEvent, createEvent, updateEvent, deleteEvent } from './actions/event_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    
    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
   
    //TESTING
    // window.login = login;
    // window.signup = signup;
    // window.logout = logout;

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;

    // window.fetchGroupEvents = fetchGroupEvents;
    // window.fetchAllEvents = fetchAllEvents;
    // window.fetchEvent = fetchEvent;
    // window.createEvent = createEvent;
    // window.updateEvent = updateEvent;
    // window.deleteEvent = deleteEvent;

    // window.createMembership = createMembership;
    // window.deleteMembership = deleteMembership;
    //TESTING

    ReactDOM.render(<Root store={store}/>, root);
});