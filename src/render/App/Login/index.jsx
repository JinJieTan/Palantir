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
      isShowPassword: false,
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

  handleEyeShow = () => {
    const { isShowPassword } = this.state;
    this.setState({
      isShowPassword: !isShowPassword,
    });
  };

  handleToggleMenu = () => {
    // 点击arrow出现下拉框，按照原型模仿qq
  };

  render() {
    const { imgSrc, isShowPassword } = this.state;

    const showPasswordIcon = isShowPassword ? (
      <span className="close-eye" onClick={this.handleEyeShow}>
        <svg viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"></path>
          <path
            d="M12 6a9.77 9.77 0 0 1 8.82 5.5 9.647 9.647 0 0 1-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 0 0 1 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 0 1-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 0 0-.36 1.78 4.507 4.507 0 0 0 6.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 0 1-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
    ) : (
      <span className="open-eye" onClick={this.handleEyeShow}>
        <svg viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path
            d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
    );
    return (
      <div className="login-container">
        <div className="login-content">
          <h1 className="logo-container">
            <label htmlFor="text" className="login-title">
              Palantir
            </label>
          </h1>
          <div className="avatar-container">
            <div class="imgCon">
              <img src={imgSrc} />
            </div>
            <i></i>
          </div>
          <div className="input-box">
            {/* <label htmlFor="text">账号:</label> */}
            <input
              className="username-input"
              type="text"
              placeholder="请输入账号"
              onChange={this.handleChange.bind(this, 'username')}
            />
            <span className="arrow-drop-down" onClick={this.handleToggleMenu}>
              <svg viewBox="0 0 24 24" id="arrow-drop-down">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="currentColor"></path>
                <path d="M0 0h24v24H0V0z" fill="none"></path>
              </svg>
            </span>
          </div>
          <div className="input-box">
            {/* <label htmlFor="text">密码:</label> */}
            <input
              className="password-input"
              type={isShowPassword ? 'text' : 'password'}
              placeholder="请输入密码"
              onChange={this.handleChange.bind(this, 'password')}
            />
            {showPasswordIcon}
          </div>
          <div className="nobody-container">
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
