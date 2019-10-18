import React from 'react';
import dva from 'dva';
import App from './App';
import demo from '../App/Dva-model/demo';
const app = dva();

app.model(demo);
app.router(({ history, app: store }) => (
  <App history={history} getState={store._store.getState} dispatch={store._store.dispatch} />
));

app.start('#root');
