import React, { Component } from 'react';
import SideMenu from '../components/VideoListSample/SideMenu/index.func';
import VideoList from '../components/VideoListSample/VideoList/index.func';
import '../components/VideoListSample/index.less';
import postDef from '../../assets/image/1.jpeg';

export default class Collections extends Component {
  constructor(props) {
    super();
    this.state = {
      menuItems: [
        {
          id: 0,
          name: '收藏1',
        },
        {
          id: 1,
          name: '收藏2',
        },
      ],
      videoItems: [],
    };
  }

  componentDidMount() {
    // 获取视频列表
    const data = (url) => ajax(`http://47.106.220.143/videos`);
    this.setState({
      // videoItems: data,
      videoItems: [
        {
          id: 0,
          name: '视频标题1视频标题1视频标题1视频标题1',
          imgUrl: postDef,
          url: 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4',
        },
        {
          id: 1,
          name: '视频标题2',
          imgUrl: postDef,
          url: 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4',
        },
        {
          id: 2,
          name: '视频标题2',
          imgUrl: postDef,
          url: 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4',
        },
        {
          id: 3,
          name: '视频标题2',
          imgUrl: postDef,
          url: 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4',
        },
        {
          id: 4,
          name: '视频标题2',
          imgUrl: postDef,
          url: 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4',
        },
      ],
    });
  }

  /**
   * 切换菜单
   * @param {string} id
   */
  handleMenuChange(id) {
    console.log(id);
  }

  render() {
    const { menuItems, videoItems } = this.state;
    return (
      <div className="localvideos-container">
        <div className="localvideos-container-left">
          <SideMenu items={menuItems} handleMenuChange={this.handleMenuChange}></SideMenu>
        </div>
        <div className="localvideos-container-right">
          <VideoList items={videoItems}></VideoList>
        </div>
      </div>
    );
  }
}
