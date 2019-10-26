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
    };
  }
  render() {
    return (
      <div className="Main">
        <div className="container">
          <nav></nav>
          <main>
          <h1>Home</h1>
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
        </button>
          </main>
        </div>
        <footer>
          底部
        </footer>

      </div>
    );
  }
}
