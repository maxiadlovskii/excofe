import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { links } from '../../../constants/routerLinks';

import '../../../styles/global.module.scss';
import styles from './App.module.scss';


const routes = [
  { path: links.VIDEO, component: () => <>TestRouterVideo</> },
  { path: links.LIST, component: () => <>TestRouterList</> }
];

const App = () => (
  <div className={ styles.App }>
    <Switch>
      { routes.map(({ path, component }) => <Route key={ path } path={ path } component={ component } />)}
      <Redirect to={ links.LIST } />
    </Switch>
  </div>
);

export default App;
