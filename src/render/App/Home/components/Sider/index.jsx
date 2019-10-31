import React from 'react';


import "./index.less";

const imgSrc = require("../../../assets/image/home_sample.jpg");

const HomeSider = props => {
  const {list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]} = props;
  return (
    <div className="home-sider">
      <ul>
        {list.map((item, index) => index === 0 ? 
          <li>
            <p>{index + 1}</p>
            <div className="sider-item sider-item-fir">
              <img src={imgSrc} alt="" srcset=""/>
              <div className="sider-item-cont">
                <p>官网中是这么说的：除了数据属性，Vue 实例还暴露了一些有用的实例属性与方法。它们都有前缀 $，以便与用户定义的属性区分开来。例如</p>
                <div className="play-num">
                  ▶ <span>9999</span>
                </div>
              </div>
            </div>
          </li> :
          <li>
            <p>{index + 1}</p>
            <div className="sider-item">
              <p>监听数据的变化,通俗点来讲就是观察一个值的变化，观察的这</p>
            </div>
          </li>
        )}
      </ul>
      <div className="more">
        查看更多 ☛
        <span></span>
      </div>
    </div>
  )
}

export default HomeSider;