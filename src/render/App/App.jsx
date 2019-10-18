import React from 'react';
import { HashRouter, Route, Switch } from 'dva/router';
import ErrorBoundary from './ErrorBoundary/';
import Login from './Login/index';
import Video from './Video/index';
import './globalstyle/index.css';
import { connect } from 'dva';
class App extends React.PureComponent {
  render() {
    return (
      <HashRouter>
        <ErrorBoundary>
          {/* <Login /> */}
          <div style={{ WebkitAppRegion: 'drag' }} className="navigation">
            <span>拖动区域(---后面会加最小化菜单等)</span>
          </div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/video" component={Video} />
            <Route path="/" component={Login} />
          </Switch>
        </ErrorBoundary>
      </HashRouter>
    );
  }
}
export default connect()(App);
