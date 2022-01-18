import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const mount = (el) => {
  ReactDOM.render(
    <App />,
    el,
  )
};


// if we are in development mode and running as a standalone app (not exposed to the container)
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount }
