import React from 'react';


import "./index.less";
const imgSrc = require("@a/assets/image/home_sample.jpg");

const HomeContentItme = props => {
  const { list } = props;
  return (
    <div className="home-content-item">
      <div className="video-pic">
        <img src={imgSrc} alt="" />
      </div>
      <p className='title'>视频标题</p>
      <div className="video-info">
        <div>
          <img src={imgSrc} className="icon" />
          <span>99999</span>
        </div>
        <div>
          <img src={imgSrc} className="icon" />
          <span>99999</span>
        </div>
      </div>
    </div>
  )
}

export default HomeContentItme;