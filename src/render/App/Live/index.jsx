import React, { PureComponent } from 'react';
import {Link} from 'dva/router';

import './index.less';

export default class Live extends PureComponent {
    render() {
        return (
            <div className="live-container">
                <div className='live-nav'>
                    <div className='title_box'>
                        <p className='title'>视频标题</p>
                        <p className='date'><span>2019-10-25</span><span>22:24</span></p>
                        <p className='work'>
                            <span>9999播放量</span>
                            <span>666评论</span>
                            <span className='prohibit_img'></span>
                            <span>未经作者授权，禁止转载</span>
                        </p>
                    </div>
                    <div className='live-nav-user'>
                        <img src={ '#' } />
                        <div className='user-box'>
                            <p className='user'>用户名</p>
                            <p className='addIcon'>

                                <span>关注</span>
                            </p>
                        </div>

                        <p className='lovely'>猜你喜欢</p>
                    </div>

                </div>
                <div className="live-content">
                    <div className="alive">
                        <div className="live-mask">
                            点击进入直播间
                        </div>
                    </div>
                    <ul className="othen-live">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul className="live-classify">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>
                            <Link to="/more_live_classify">查看更多分类>></Link>
                        </li>
                    </ul>  
                </div>
                <div className="live-hot-recommend">
                    <h3>热门推荐</h3>
                    <ul className="live-hot-recommend-list">
                        <li>
                            <div className="img"></div>
                            <div className="live-hot-recommend-info">
                                <div className="avatar"></div>
                                <div className="live-info">
                                    <p className="title">直播标题</p>
                                    <p className="author">作者名字</p>
                                </div>
                                <div className="live-desc">
                                    <div className="subscribe-state">关注</div>
                                    <span className="watcing-num">观看人数</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img"></div>
                            <div className="live-hot-recommend-info">
                                <div className="avatar"></div>
                                <div className="live-info">
                                    <p className="title">直播标题</p>
                                    <p className="author">作者名字</p>
                                </div>
                                <div className="live-desc">
                                    <div className="subscribe-state">关注</div>
                                    <span className="watcing-num">观看人数</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img"></div>
                            <div className="live-hot-recommend-info">
                                <div className="avatar"></div>
                                <div className="live-info">
                                    <p className="title">直播标题</p>
                                    <p className="author">作者名字</p>
                                </div>
                                <div className="live-desc">
                                    <div className="subscribe-state">关注</div>
                                    <span className="watcing-num">观看人数</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img"></div>
                            <div className="live-hot-recommend-info">
                                <div className="avatar"></div>
                                <div className="live-info">
                                    <p className="title">直播标题</p>
                                    <p className="author">作者名字</p>
                                </div>
                                <div className="live-desc">
                                    <div className="subscribe-state">关注</div>
                                    <span className="watcing-num">观看人数</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img"></div>
                            <div className="live-hot-recommend-info">
                                <div className="avatar"></div>
                                <div className="live-info">
                                    <p className="title">直播标题</p>
                                    <p className="author">作者名字</p>
                                </div>
                                <div className="live-desc">
                                    <div className="subscribe-state">关注</div>
                                    <span className="watcing-num">观看人数</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
