import React, {PureComponent} from 'react';

import './index.less';

const imgSrc = require("@a/assets/image/4.jpeg")

class MoreVideo extends PureComponent {

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    let liveScan = (length) => {

      var res = [];

      for (var i = 0; i < length; i++) {

          res.push(<div className="liveScan">
            <img src={imgSrc} className="scanImg"/>
            <p className='title'>视频标题</p>
            <div>
              <div className="">
                <img src={imgSrc} className="icon"/>
                99999
              </div>
              <div>
                <img src={imgSrc} className="icon"/>
                99999
              </div>
            </div>
          </div>)

      }

      return res
    }
    return (
      <div className="more-video">
        { liveScan(20) }
      </div>
    )
  }
};

export default MoreVideo;