import React from 'react';
import avatarDef from '../../../assets/image/avatar-def.png';

function Video(props) {
  const {name, intro, url} = props.item;
  return (
    <li className="moment-item">
      <div className="moment-item-left">
        <div className="moment-avatar-container">
          <img src={avatarDef} alt="" />
        </div>
      </div>
      <div className="moment-item-right">
        <p className="moment-item-name">{name}</p>
        <p className="moment-item-intro">{intro}</p>
        <div className="moment-video-container">
          <video width="520" height="300" controls>
            <source src={url} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
        <div className="moment-operations">
          <button className="moment-operate collect"></button>
          <button className="moment-operate like"></button>
          <button className="moment-operate comment"></button>
          <button className="moment-operate download"></button>
        </div>
      </div>
    </li>
  );
}

export default Video;
