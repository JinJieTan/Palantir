import React from 'react';

import HomeContentItem from '../HomeContentItem';

import "./index.less";

const HomeContent = props => {
  const {list = [1, 2, 3, 4, 5, 6], id = ""} = props;
  return (
    <div className="home-content">
      {list.map(item => <HomeContentItem key={item + id} />)}
    </div>
  )
}

export default HomeContent;