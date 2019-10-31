import React, {PureComponent} from 'react';
import "./index.less";

const HomeHeader = props => {
  const {title} = props;
  return (
    <div className="home-header">
      <h3 className="title">{title}</h3>
      <a className="more">查看全部 <span>☛</span></a>
    </div>
  )
}

export default HomeHeader;