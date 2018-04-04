import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { loadAuthToken } from './local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth';

import authReducer from './reducers/auth';
import userReducer from './reducers/users';
import introReducer from './reducers/intro';
import portfolioReducer from './reducers/portfolio';



const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        userReducer: userReducer,
        introReducer: introReducer,
        portfolio: portfolioReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;
