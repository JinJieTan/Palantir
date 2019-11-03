import React from 'react';
import { ipcRenderer } from 'electron';
import {Link} from 'dva/router';

import RecommendItem from './components/Recommend';
import HotRecommendItem from './components/HotRecommend';
import HomeHeader from './components/Header';
import HomeContent from './components/Content';
import HomeSider from './components/Sider';

import { clearSession } from '@/render/utills/API/index';
import './index.less'

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      recommendList: [1, 2, 3, 4, 5, 6],
      hotRecommendList: [1, 2, 3, 4],
      imgSrc1: require('@a/assets/image/4.jpeg'),
      starsImg: require('@a/assets/image/Stars.png'),
      listImage: require('@a/assets/image/manage.png')
    };
  }
  render() {
    const { recommendList, hotRecommendList, imgSrc1} = this.state;
    const bgImg = {
      background: `url(${imgSrc1}) no-repeat`,
      backgroundSize: "100% 100%"
    };
    
    return (
      <div className="container">
        <nav>
            <img src={ this.state.listImage } className="classify"/>
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
                {recommendList.map((item,index) => <RecommendItem imgSrc={imgSrc1} key={index} />)}
              </div>
            </div>
          </div>
          <div className="home-hot-recommend">
            <div className="home-content-header">
              <h3 className="title">热门推荐</h3>
              <Link to="/home/more_video" className="more">查看全部 <span>☛</span></Link>
            </div>
            <div className="home-hot-recommend-content">
              <div className="home-hot-recommend-list">
                {hotRecommendList.map((_, index) => <HotRecommendItem key={index} imgSrc={imgSrc1} title="德云色" author="笑笑" status={1} num={32322} />)}
              </div>
            </div>
          </div>
          <div className="home-life home-chunk">
            <div className="home-chunk-l">
              <HomeHeader title="生活" />
              <HomeContent />
            </div>
            <div className="home-chunk-r">
              <HomeSider />
            </div>
          </div>
          <div className="home-game home-chunk">
            <div className="home-chunk-l">
              <HomeHeader title="游戏" />
              <HomeContent id="game" />
            </div>
            <div className="home-chunk-r">
              <HomeSider id="game" />
            </div>
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
              ipcRenderer.send('Enter-Home', { width: 400, height: 600 });
            }}
          >
            返回登陆
            </button>
        </main>

      </div>
    );
  }
}
