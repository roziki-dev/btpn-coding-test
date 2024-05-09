import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './reducers';

const logger = createLogger({
  timestamp: true,
  collapsed: true,

  predicate: (_, action) => {
    //TO-DO: Log hanya untuk development
    if (__DEV__ && typeof action === 'object') {
      if (action?.payload && typeof action?.payload === 'object') {
        // console.log(
        //   `[${action?.type}] => ${JSON.stringify(action?.payload || {})}`,
        // );
      }
    }
  },
});

let store = createStore(reducer, applyMiddleware(thunk, logger));

export {store};
