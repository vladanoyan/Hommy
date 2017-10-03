import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-select/dist/react-select.css';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import 'react-dates/lib/css/_datepicker.css';
import './index.pcss';
import './bootstrap.scss';
import Root from './routes/root';
import rootRoutes from './routes/root/routes';

const routes = [
  {
    component: Root,
    routes: rootRoutes,
  },
];

ReactDOM.render(
  <BrowserRouter>
    { renderRoutes(routes) }
  </BrowserRouter>,
  document.getElementById('root'),
);
