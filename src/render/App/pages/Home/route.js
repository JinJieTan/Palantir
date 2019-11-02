import React from 'react';
import { HashRouter, Route, Switch } from 'dva/router';
import './index.less'
import Header from '../Header';
import Home from './index';
import Live from '../Live';
import MoreVideo from '../MoreVideo';
import Uc from '../../Uc';

export default class HomeRoute extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: require('../../assets/image/4.jpeg'), 
    };
  }
  render() {
    return (
      <div className="Main">
        <Header {...this.props}/>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/home/more_video" component={MoreVideo} />
          <Route path="/home/live" component={Live} />
          <Route path="/home/uc" component={Uc} />
        </Switch>
      </div>
    );
  }
}
