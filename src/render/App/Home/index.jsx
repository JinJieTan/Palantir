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
      imgSrc: require('../assets/image/4.jpeg'),
      imgSrc1: require('../assets/image/home_sample.jpg'),
      starsImg: require('../assets/image/Stars.png')
    };
  }
  render() {
    const { recommendList, hotRecommendList, imgSrc1, imgSrc } = this.state;
    const bgImg = {
      background: `url(${imgSrc1}) no-repeat`,
      backgroundSize: "100% 100%"
    };
    let liveScan = (length) => {

      var res = [];

      for (var i = 0; i < length; i++) {

          res.push(<div className="liveScan">
            <img src={imgSrc} className="scanImg"/>
            <p>视频标题</p>
            <div>
              <div className="">
                <img src={imgSrc} className="icon"/>
                99999
              </div>
              <div>
                <img src={imgSrc} className="icon"/>
                99999
              </div>
            </div>
          </div>)

      }

      return res

  }
    return (
      <div className="container">
        <nav>
            <img src={ this.state.starsImg } className="classify"/>
            <ul>
              <li >
                <img src={ this.state.starsImg } className="stars"/>
                首页
              </li>
              <li >
                <img src={ this.state.starsImg } className="stars"/>
                生活
              </li>
            </ul>
          </nav>
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
                {recommendList.map(() => <RecommendItem imgSrc={imgSrc1} />)}
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
                {hotRecommendList.map(() => <HotRecommendItem imgSrc={imgSrc1} title="德云色" author="笑笑" status={1} num={32322} />)}
              </div>
            </div>
          </div>
          <div className="home-life">
            { liveScan(20) }
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
