import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';
import postDef from '../../../../assets/image/1.jpeg';

export default function VideoList(props) {
  const { items } = props;

  return (
    <ul className="videolist-container clearfix">
      {items.map((e, i) => {
        const { id, name, imgUrl, url } = e;
        return (
          <li key={id}>
            <Link to={url}>
              <div className="videolist-item-img-container">
                <img src={imgUrl ? imgUrl : postDef} alt=""/>
              </div>
              <div className="videolist-item-name">
                {/* <span >{name}</span> */}
                {name}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
