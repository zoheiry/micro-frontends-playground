import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate, onSignIn, defaultHistory, initialPath } = {}) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath],
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <App history={history} onSignIn={onSignIn} />,
    el,
  );

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      if (history.location.pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  }
};



// if we are in development mode and running as a standalone app (not exposed to the container)
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount }
