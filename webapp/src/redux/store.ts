import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Import reducers
// Example: import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  // Add reducers here
  // Example: user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store; 