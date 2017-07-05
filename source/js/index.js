import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import appReducer from './reducers/';
import ApplicationContainer from './components/ApplicationContainer';

const store = createStore(appReducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f)
);

render(
  <Provider store={store}>
    <ApplicationContainer />
  </Provider>,
  document.querySelector('[data-react-application]')
);
