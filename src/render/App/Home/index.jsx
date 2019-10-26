import React from 'react';
import { ipcRenderer } from 'electron';
import { clearSession } from '../../utills/API/index';
import './index.less'
import Header from '../Header';
import ErrorBoundary from '../ErrorBoundary';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: require('../assets/image/4.jpeg'),
      starsImg: require('../assets/image/Stars.png')
    };
  }
  render() {
    let liveScan = (length) => {

      var res = [];

      for (var i = 0; i < length; i++) {

          res.push(<div className="liveScan">
            <img src="" className="scanImg"/>
            <p>视频标题</p>
            <div>
              <div className="">
                <img src="" className="icon"/>
                99999
              </div>
              <div>
                <img src="" className="icon"/>
                99999
              </div>
            </div>
          </div>)

      }

      return res

  }
    return (
      <div className="Main">
        <div className="container">
          <nav>
            <img src={ this.state.starsImg } className="classify"/>
            <ul>
              <li >
                <img src={ this.state.starsImg } className="stars"/>
                首页
              </li>
              <li >
                <img src={ this.state.starsImg } className="stars"/>
                生活
              </li>
            </ul>
          </nav>
          <main>
            { liveScan(20) }
            {/* <h1>Home</h1>
            <button
              onClick={async () => {
                const isNoPassword = window.confirm('是否选择退出免密码登陆？');
                if (isNoPassword) {
                  const result = await clearSession();
                  if (result.code === 0) {
                    alert('退出登陆成功');
                  }
                }
                ipcRenderer.send('Enter-Home', { width: 342, height: 417 });
              }}
            >
              返回登陆
            </button> */}
          </main>
        </div>
        {/* <footer>
          底部
        </footer> */}

      </div>
    );
  }
}
