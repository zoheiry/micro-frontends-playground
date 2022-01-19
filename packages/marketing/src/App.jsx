import React, { lazy, Suspense } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const Landing = lazy(() => import('./components/Landing'));
const Pricing = lazy(() => import('./components/Pricing'));

const generateClassName = createGenerateClassName({ productionPrefix: 'ma' });

const App = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/pricing" component={Pricing} />
              <Route path="/" component={Landing} />
            </Switch>
          </Suspense>
        </Router>
      </StylesProvider>
    </div>
  )
};

export default App;
