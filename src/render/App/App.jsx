import React from 'react';
import { HashRouter, Route, Switch } from 'dva/router';
import { connect } from 'dva';
import ErrorBoundary from './ErrorBoundary/';
import Login from './Login/index';
import Video from './Video/index';
import './globalstyle/index.css';
class App extends React.PureComponent {
  componentDidMount() {
    //云端部署 后期加入
    // const ws = new WebSocket('ws://localhost:8080');
    // ws.onopen = function() {
    //   ws.send('123');
    //   console.log('open');
    // };
    // ws.onmessage = function() {
    //   console.log('onmessage');
    // };
    // ws.onerror = function() {
    //   console.log('onerror');
    // };
    // ws.onclose = function() {
    //   console.log('onclose');
    // };
  }
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
