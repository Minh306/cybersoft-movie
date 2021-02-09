import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import credential from './Reducers/credential';
import userReducers from './Reducers/UserReducers';
import movieReducers from './Reducers/MovieReducers';

const reducer = combineReducers({
    credential,
    userReducers,
    movieReducers,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk))
)
