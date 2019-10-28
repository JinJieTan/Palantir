import React, { Component } from 'react';
import { Route } from 'dva/router';
import { Link } from 'react-router-dom';
import Collections from './Collections';
import LocalVideos from './LocalVideos';
import Moment from './Moment';
import MyVideos from './MyVideos';
import Subscribe from './Subscribe';
import avatarDef from '../assets/image/avatar-def.png';
import './index.less';

export default class Uc extends Component {
  constructor(props) {
    super();
    this.state = {
      routeConfig: [
        {
          path: '/home/uc',
          title: '动态',
          exact: true,
          component: Moment,
          isShowOnNav: false,
        },
        {
          path: '/home/uc/moment',
          title: '动态',
          exact: true,
          component: Moment,
          isShowOnNav: true,
        },
        {
          path: '/home/uc/localVideos',
          title: '本地视频',
          exact: true,
          component: LocalVideos,
          isShowOnNav: true,
        },
        {
          path: '/home/uc/collections',
          title: '收藏',
          exact: true,
          component: Collections,
          isShowOnNav: true,
        },
        {
          path: '/home/uc/myvideos',
          title: '我的视频',
          exact: true,
          component: MyVideos,
          isShowOnNav: true,
        },
        {
          path: '/home/uc/subscribe',
          title: '关注',
          exact: true,
          component: Subscribe,
          isShowOnNav: true,
        },
        {
          path: '/home/uc/feedback',
          title: '问题反馈',
          exact: true,
          component: Moment,
          isShowOnNav: true,
        },
        {
          path: '/home/live',
          title: '直播间',
          exact: true,
          component: Moment,
          isShowOnNav: true,
        },
        {
          path: '/home/uc/history',
          title: '历史记录',
          exact: true,
          component: Moment,
          isShowOnNav: true,
        },
        {
          path: '/home/uc/setting',
          title: '设置',
          exact: true,
          component: Moment,
          isShowOnNav: true,
        },
        {
          path: '/home/uc/livesetting',
          title: '直播设置',
          exact: true,
          component: Moment,
          isShowOnNav: true,
        },
      ],
    };
  }

  render() {
    const { routeConfig } = this.state;
    return (
      <div className="uc-container">
        {/* 个人信息展示 */}
        <div className="uc-info-container">
          <div className="uc-info-avatar-container">
            <img src={avatarDef} alt="" />
          </div>
          <div className="uc-info-details">
            <div className="uc-info-details-left">
              <h3 className="uc-info-name">Palantir</h3>
              <p className="uc-info-signature">
                这是一个开源项目，励志打造桌面端的音视频IM项目，开发成员为SegmentFault前端交流群成员这是一个开源项目，励志打造桌面端的音视频IM项目，开发成员为SegmentFault前端交流群成员。
              </p>
            </div>
            <div className="uc-info-details-right">
              <button type="primary">+ 关注</button>
              <button type="primary">发消息</button>
            </div>
          </div>
        </div>
        {/* 导航 */}
        <ul className="uc-nav">
          {routeConfig.map((item, index) => {
            if (item.isShowOnNav) {
              return (
                <li key={item + index}>
                  <Link className="uc-nav-link" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
        {/* 主体 */}
        <div className="uc-main">
          {routeConfig.map((item, index) => {
            return <Route key={item + index} path={item.path} exact={item.exact} component={item.component} />;
          })}
        </div>
      </div>
    );
  }
}
