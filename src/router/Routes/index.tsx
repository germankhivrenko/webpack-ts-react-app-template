import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Loadable from 'react-loadable';
import PageLoading from '_components/PageLoading';
import EnhancedRoute from '../EnhancedRoute';

const Auth = Loadable({
  loader: () => import('_components/Auth'),
  loading: PageLoading,
});

const Dashboard = Loadable({
  loader: () => import('_components/Dashboard'),
  loading: PageLoading,
});

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/dashboard" />
    </Route>

    <EnhancedRoute path="/auth" documentTitle="Auth" component={Auth} />
    <EnhancedRoute
      path="/dashboard"
      documentTitle="Dashboard"
      component={Dashboard}
    />
  </Switch>
);

export default Routes;
