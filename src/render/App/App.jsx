import React from 'react';
import { HashRouter, Route, Switch } from 'dva/router';
import { connect } from 'dva';
import { ipcRenderer } from 'electron';
import ErrorBoundary from './ErrorBoundary/';
import Login from './Login/index';
import Home from './Home/route';
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

  exit = () => {
    ipcRenderer.send('close-window');
  };
  render() {
    return (
      <HashRouter>
        <ErrorBoundary>
          {/* <Login /> */}
          {/* <div style={{ WebkitAppRegion: 'drag' }} className="navigation">
            <div className="exit" style={{ width: 20, height: 20 }} onClick={this.exit}></div>
          </div> */}
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/" component={Login} />
          </Switch>
        </ErrorBoundary>
      </HashRouter>
    );
  }
}
export default connect()(App);
