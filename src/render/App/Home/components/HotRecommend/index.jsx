import React, { PureComponent } from 'react';



import "./index.less";

export default props => {
    const { imgSrc, title, author, status, num } = props;
    const bgImg = {
        background: `url(${imgSrc}) no-repeat`,
        backgroundSize: "cover"
    }
    return (
        <div className="hot-recommend-item">
            <div className="hot-recommend-desc" style={bgImg}>
                <div className="hot-recommend-mask">
                    <span className="hot-time-length">03:11</span>
                </div>
            </div>
            <div className="hot-recommend-info">
                <div className="hot-recommend-avatar">
                    <img src={imgSrc} alt="" srcset=""/>
                </div>
                <div className="hot-recommend-name">
                    <p className="title">{title}</p>
                    <p className="author">{author}</p>
                </div>
                <div className="hot-recommend-state">
                    <div className="subscribe-state">{status ? "已关注" : "关注"}</div>
                    <span className="watcing-num">{num}</span>人
                </div>
            </div>
        </div>
    )
};