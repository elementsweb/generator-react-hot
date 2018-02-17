import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// modern way to render react components when return value is relied upon
// see https://facebook.github.io/react/docs/react-dom.html#render
const render = (Component, callback) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
    callback,
  );
};

render(App, () => {
  if (module.hot) {
    module.hot.accept('./App', () => render(App));
  }
});
