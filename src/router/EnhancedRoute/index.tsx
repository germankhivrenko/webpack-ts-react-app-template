import * as React from 'react';
import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { EnhancedRouteProps } from './types';

const EnhancedRoute: React.FC<EnhancedRouteProps> = ({
  path,
  documentTitle,
  layout: Layout = React.Fragment,
  component: Component,
}) => {
  useEffect(() => {
    document.title = documentTitle;
  });

  return (
    <Route exact path={path}>
      <Layout>
        <Component />
      </Layout>
    </Route>
  );
};

export default EnhancedRoute;
