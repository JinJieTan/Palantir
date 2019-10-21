import React from 'react';
import { clearSession } from '../../utills/API/index';
export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Video</h1>
        <button
          onClick={async () => {
            const isNoPassword = window.confirm('是否选择退出免密码登陆？');
            console.log(isNoPassword);
            if (isNoPassword) {
              const result = await clearSession();
              if (result.code === 0) {
                alert('退出登陆成功');
              }
            }
            this.props.history.replace('/login');
          }}
        >
          返回登陆
        </button>
      </div>
    );
  }
}
