import React, { PureComponent } from 'react';
import {Link} from 'dva/router';

import './index.less';

export default class Live extends PureComponent {
    render() {
        return (
            <div className="live-container">
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