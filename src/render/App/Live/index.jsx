import React from 'react';
import './index.less'
import Header from '../Header';
import ErrorBoundary from '../ErrorBoundary';

export default class Live extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: require('../assets/image/3.jpeg'),
        };
    }

    componentWillMount() {

    }

    render() {
        const {imgSrc} = this.state;
        return (
            <div id="Live">
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
                <div className="live-Wrapper-box">
                    <section className="live-Wrapper">
                        <div className="live-Slide-player">
                            <button>进入直播间</button>
                        </div>
                        <ul className="live-Slide-nav">
                            <li className="tab">
                                <img src={imgSrc} alt=""/>
                            </li>
                            <li className="tab">
                                <img src={imgSrc} alt=""/>
                            </li>
                            <li className="tab">
                                <img src={imgSrc} alt=""/>
                            </li>
                            <li className="tab">
                                <img src={imgSrc} alt=""/>
                            </li>
                            <li className="tab">
                                <img src={imgSrc} alt=""/>
                            </li>
                            <li className="tab">
                                <img src={imgSrc} alt=""/>
                            </li>
                            <li className="tab">
                                <img src={imgSrc} alt=""/>
                            </li>
                            <li className="tab">
                                <img src={imgSrc} alt=""/>
                            </li>
                        </ul>
                    </section>
                    <div className="live-Main">
                        <ul className="live-Type-nav">
                            <li className="tab">
                                <img src={imgSrc} alt=""/>
                            </li>
                            <li className="tab">
                                <img src={imgSrc} alt=""/>
                            </li>
                            <li className="tab">
                                <img src={imgSrc} alt=""/>
                            </li>
                            <li className="tab">
                                <img src={imgSrc} alt=""/>
                            </li>
                            <li className="tab">
                                <img src={imgSrc} alt=""/>
                            </li>
                            <li className="tab">
                                <img src={imgSrc} alt=""/>
                            </li>
                            <li className="tab">
                                <img src={imgSrc} alt=""/>
                            </li>
                            <li className="tab more">
                                <a href="javascript:;">查看更多</a>
                            </li>
                        </ul>

                    </div>
                    <div className="live-Recommend">
                        <div className="main-Title">
                            <h2>热门推荐 </h2>
                            <a href="#">查看更多></a>
                        </div>
                        <ul className="live-Recommend-list">
                            <li className="item">
                                <img src={imgSrc} alt=""/>
                                <div className="live-Recommend-detail">
                                    <img className="avatar" src={imgSrc} alt=""/>
                                    <div className="title">
                                        <h3>直播标题</h3>
                                        <div className="detail">
                                            <span>作者名字</span><span>12324人</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item">
                                <img src={imgSrc} alt=""/>
                                <div className="live-Recommend-detail">
                                    <img className="avatar" src={imgSrc} alt=""/>
                                    <div className="title">
                                        <h3>直播标题</h3>
                                        <div className="detail">
                                            <span>作者名字</span><span>12324人</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item">
                                <img src={imgSrc} alt=""/>
                                <div className="live-Recommend-detail">
                                    <img className="avatar" src={imgSrc} alt=""/>
                                    <div className="title">
                                        <h3>直播标题</h3>
                                        <div className="detail">
                                            <span>作者名字</span><span>12324人</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item">
                                <img src={imgSrc} alt=""/>
                                <div className="live-Recommend-detail">
                                    <img className="avatar" src={imgSrc} alt=""/>
                                    <div className="title">
                                        <h3>直播标题</h3>
                                        <div className="detail">
                                            <span>作者名字</span><span>12324人</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="item">
                                <img src={imgSrc} alt=""/>
                                <div className="live-Recommend-detail">
                                    <img className="avatar" src={imgSrc} alt=""/>
                                    <div className="title">
                                        <h3>直播标题</h3>
                                        <div className="detail">
                                            <span>作者名字</span><span>12324人</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

