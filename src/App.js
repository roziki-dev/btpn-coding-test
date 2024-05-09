import React from 'react';
import {Provider} from 'react-redux';
import {MainRouter} from './router';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
};

export default App;
