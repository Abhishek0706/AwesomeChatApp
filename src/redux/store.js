import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import AuthReducer from './reducers/auth';

const rootReducer = combineReducers({
  auth: AuthReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
