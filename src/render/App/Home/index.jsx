import React from 'react';
import { ipcRenderer } from 'electron';

import RecommendItem from './components/Recommend';
import HotRecommendItem from './components/HotRecommend';

import { clearSession } from '../../utills/API/index';
import './index.less'

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      recommendList: [1, 2, 3, 4, 5, 6],
      hotRecommendList: [1, 2, 3, 4],
      imgSrc: require('../assets/image/home_sample.jpg'),
    };
  }
  render() {
    const { recommendList, hotRecommendList, imgSrc } = this.state;
    const bgImg = {
      background: `url(${imgSrc}) no-repeat`,
      backgroundSize: "100% 100%"
    };
    return (
      <div className="container">
        <nav></nav>
        <main>
          <div className="main-header"></div>
          <div className="wrapper">
            <div className="swiper-container">
              <div className="swiper">
                <div className="swiper-item" style={bgImg}></div>
              </div>
            </div>
            <div className="recommend-chunk">
              <div className="recommend-list">
                {recommendList.map(() => <RecommendItem imgSrc={imgSrc} />)}
              </div>
            </div>
          </div>
          <div className="home-hot-recommend">
            <div className="home-content-header">
              <h3 className="title">热门推荐</h3>
              <span className="more">更多>></span>
            </div>
            <div className="home-hot-recommend-content">
              <div className="home-hot-recommend-list">
                {hotRecommendList.map(() => <HotRecommendItem imgSrc={imgSrc} title="德云色" author="笑笑" status={1} num={32322} />)}
              </div>
            </div>
          </div>
          <div className="home-life">
            
          </div>
          <h1>Home</h1>
          <button
            onClick={async () => {
              const isNoPassword = window.confirm('是否选择退出免密码登陆？');
              if (isNoPassword) {
                const result = await clearSession();
                if (result.code === 0) {
                  alert('退出登陆成功');
                }
              }
              ipcRenderer.send('Enter-Home', { width: 342, height: 417 });
            }}
          >
            返回登陆
            </button>
        </main>
      </div>
    );
  }
}
