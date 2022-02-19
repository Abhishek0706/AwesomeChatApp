import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import AuthReducer from './reducers/auth';
import ChatReducer from './reducers/chat';

const rootReducer = combineReducers({
  auth: AuthReducer,
  chat: ChatReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
