import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { links, linkParams } from '../../../constants/routerLinks';
import { MostViewed } from '../MostViewed/MostViewed';
import { Video } from '../Video/Video';

import '../../../styles/global.module.scss';

const routes = [
  { path: `${links.VIDEO}/:${linkParams.VIDEO_ID}`, component: Video },
  { path: links.MOST_VIEWED, component: MostViewed }
];

const App = () => (
      <Switch>
        { routes.map(({ path, component }) => <Route key={ path } path={ path } component={ component } />)}
        <Redirect to={ links.MOST_VIEWED } />
      </Switch>
);

export default App;
