import React, {PureComponent} from 'react';
import {Link} from 'dva/router';
import "./index.less";

const HomeHeader = props => {
  const {title} = props;
  return (
    <div className="home-header">
      <h3 className="title">{title}</h3>
      <Link to="/home/more_video" className="more">查看全部 <span>☛</span></Link>
    </div>
  )
}

export default HomeHeader;