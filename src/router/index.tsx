import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default Router;
