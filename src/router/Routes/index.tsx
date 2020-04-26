import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Loadable from 'react-loadable';
import PageLoading from '_components/PageLoading';
import ProtectedRoute from '../ProtectedRoute';

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
    <Route path="/auth" component={Auth} />
    <ProtectedRoute
      path="/dashboard"
      documentTitle="Dashboard"
      component={Dashboard}
    />
  </Switch>
);

export default Routes;
