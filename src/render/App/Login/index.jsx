import React from 'react';
import { connect } from 'dva';
import { ipcRenderer } from 'electron';
import { login, authentication } from '../../utills/API/index';
import sha1 from 'js-sha1';
import './index.less';
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShowAnimation: true,
      name: 1,
      isShowLogin: false,
      imgSrc: require('../assets/image/4.jpeg'),
    };
    if (localStorage.getItem('username')) {
      props.history.replace('/home');
      localStorage.removeItem('username');
    }
  }
  handleLogin = async () => {
    //点击发送此时应该鉴权 已经保存在内存中 通过this.username 和 this.password 获取～
    const result = await login({ username: this.username, password: sha1(this.password) });
    if (result.code === 0 || result.code === 1) {
      alert(result.data);
      localStorage.setItem('username', this.username);
      ipcRenderer.send('Enter-Home', { width: 1200, height: 750 });
      this.username = '';
      this.password = '';
    } else {
      alert(result.data);
      return;
    }
  };

  handleChange = (tag, e) => {
    switch (tag) {
      case 'username':
        this.username = e.target.value;
        break;
      case 'password':
        this.password = e.target.value;
        break;
    }
  };

  render() {
    const { imgSrc } = this.state;
    return (
      <div className="login-container">
        <div className="login-content">
          <div>
            <label htmlFor="text" className="login-title">
              Palantir
            </label>
          </div>
          <div class="imgCon">
            <img src={imgSrc} />
          </div>
          <div>
            {/* <label htmlFor="text">账号:</label> */}
            <input type="text" placeholder="请输入账号" onChange={this.handleChange.bind(this, 'username')} />
          </div>
          <div>
            {/* <label htmlFor="text">密码:</label> */}
            <input type="password" placeholder="请输入密码" onChange={this.handleChange.bind(this, 'password')} />
          </div>
          <div>
            <label>
              <input type="checkbox" name="1" class="tui-checkbox" />
              <span>记住密码</span>
            </label>
            <label>
              <input type="checkbox" name="1" class="tui-checkbox" />
              <span>自动登录</span>
            </label>
          </div>
          <button className="login-button" onClick={this.handleLogin}>
            登陆
          </button>
          <button className="login-button">自动注册</button>
          <a href="javascript:void(0)">忘记密码</a>
        </div>
      </div>
    );
  }
}

export default connect()(App);
