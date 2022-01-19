import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/Bootstrap';

import { useHistory } from 'react-router-dom';

const AuthApp = ({ onSignIn }) => {
  const authAppRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(authAppRef.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return (
    <div ref={authAppRef} />
  )
};

export default AuthApp;
