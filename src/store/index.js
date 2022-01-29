import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';

import { filterReducer } from './reducers/filter';
import { tasksReducer } from './reducers/tasks';

const rootRedcuer = combineReducers({
  filter: filterReducer,
  tasks: tasksReducer,
});

const log = (store) => (next) => (action) => {
  console.log('ВЫПОЛНИЛСЯ ЭКШН!', store, action);

  if (action.type === 'ADD_TASK') {
    axios.post('https://61d8e2cfe6744d0017ba8cdc.mockapi.io/tasks', action.payload);
    next(action);
    return;
  }

  return next(action);
};


const store = createStore(rootRedcuer, composeWithDevTools(applyMiddleware(thunk, log)));

export default store;
