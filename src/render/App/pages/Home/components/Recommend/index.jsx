import React, { PureComponent } from 'react';



import "./index.less";

export default props => {
    const {imgSrc} = props;
    const bgImg = {
        background: `url(${imgSrc})`
    }
    return (
        <div className="recommend-item">
            <div className="recommend-desc" style={bgImg}>
                {/* <img src={imgSrc} alt="" srcset=""/> */}
            </div>
            <div className="recommend-mask">
                <span className="time-length">03:11</span>
            </div>
        </div>
    )
};