import React, { useRef, useEffect } from 'react';
import { mount } from 'dashboard/Bootstrap';

const DashboardApp = ({ onSignIn }) => {
  const authAppRef = useRef(null);

  useEffect(() => {
    mount(authAppRef.current);
  }, []);

  return (
    <div ref={authAppRef} />
  )
};

export default DashboardApp;
