import React, { lazy, Suspense } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const Signin = lazy(() => import('./components/Signin'));
const Signup = lazy(() => import('./components/Signup'));

const generateClassName = createGenerateClassName({ productionPrefix: 'au' });

const App = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/auth/signin" component={Signin} />
              <Route path="/auth/signup" component={Signup} />
            </Switch>
          </Suspense>
        </Router>
      </StylesProvider>
    </div>
  )
};

export default App;
