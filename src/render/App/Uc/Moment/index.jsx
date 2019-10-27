import React, { Component } from 'react';
import ajax from '../../../utills/API/ajax';
import Video from './MomentItem/Item.func';
import './index.less';

export default class Moment extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          name: '备注名',
          intro: '视频语录',
          url: 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4',
        },{
          name: '备注名',
          intro: '视频语录',
          url: 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4',
        },
      ],
    };
  }

  componentDidMount() {
    // 获取视频列表
    const data = () => ajax(`http://47.106.220.143/videos`);
    console.log(1, data);
    // this.setState({
    //   items: data,
    // });
  }

  render() {
    const { items } = this.state;
    return (
      <div className="moment-container">
        <ul className="moment-list">
          {items.map((e, i) => {
						return <Video key={i} item={e} />
          })}
        </ul>
      </div>
    );
  }
}
