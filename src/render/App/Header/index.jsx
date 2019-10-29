import React from 'react';
import './index.less'

export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: require('../assets/image/4.jpeg'),
            searchImg: require('../assets/image/search.png')
        };
    }

    render() {
        const {imgSrc, searchImg} = this.state;
        return (
            <div className="headerClass">
                <img src={imgSrc}/>
                <label htmlFor="text">
                    Palantir
                </label>
                <button>{'<'}</button>
                <button>{'>'}</button>
                <button onClick={() => this.props.history.push(`/home`)}>首页</button>
                <button onClick={() => this.props.history.push(`/home/live`)}>直播</button>
                <div className="search">
                    <input placeHolder="搜索"/>
                    <img src={searchImg} alt=""/>
                </div>
                <img src={imgSrc}/>
                <label onClick={() => this.props.history.push(`/home/uc`)}>用户名</label>
                <div className="userInfo">
                    <div className='user-ava'>
                        <img src={imgSrc} alt=""/>
                        <span>用户名</span>
                    </div>
                    <div>
                        <span>关注：9000</span>
                        <span>粉丝：13万</span>
                    </div>
                    <div/>
                    <div>
                        <span>动态</span>
                        <span>
                            <span className='num'>9</span>
                            <span className='arrow'>></span>
                        </span>
                    </div>
                    <div>
                        <span>消息通知</span>
                        <span>
                            <span className='num'>19</span>
                           <span className='arrow'>></span>
                        </span>
                    </div>
                    <div>
                        <span>我的收藏</span>
                        <span><span className='num'>9</span>
                        <span className='arrow'>></span>
                        </span>
                    </div>
                    <div>
                        <span>历史记录</span>
                        <span>
                            <span className='arrow'>></span>
                        </span>
                    </div>
                    <div>
                        <span>个人信息设置</span>
                        <span>
                            <span className='arrow'>></span>
                        </span>
                    </div>
                    <div>
                        <button>退出登录</button>
                    </div>
                </div>
                <button>点我投稿</button>
                <div className="btnGroup">
                </div>
            </div>
        );
    }
}
