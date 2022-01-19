import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/Bootstrap';

import { useHistory } from 'react-router-dom';

const MarketingApp = () => {
  const marketingAppRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(marketingAppRef.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname) {
          history.push(nextPathname);
        }
      }
    });

    history.listen(onParentNavigate);
  }, []);

  return (
    <div ref={marketingAppRef} />
  )
};

export default MarketingApp;
