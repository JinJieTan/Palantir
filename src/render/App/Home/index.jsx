import React from 'react';
import { ipcRenderer } from 'electron';
import { clearSession } from '../../utills/API/index';
export default class App extends React.PureComponent {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
