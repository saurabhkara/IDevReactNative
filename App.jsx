import React from 'react';
import Route from './src/navigations/Route';
import {Provider} from 'react-redux';
import store from './src/redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
