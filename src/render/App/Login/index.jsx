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
      inputType: 'password',
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
  showKey = () => {
    this.setState({
      inputType: 'text'
    });
  };
  hideKey = () => {
    this.setState({
      inputType: 'password'
    });
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
    const { imgSrc, inputType } = this.state;
    return (
      <div className="login-container">
        <div className="login-content">
          <div className='login-name'>
            <label htmlFor="text" className="login-title">
              Palantir
            </label>
          </div>
          <div className="imgCon">
            <img src={imgSrc} />
          </div>
          <div className='form-name'>
            {/* <label htmlFor="text">账号:</label> */}
            <input type="text" placeholder="请输入账号" onChange={this.handleChange.bind(this, 'username')} />
          </div>
          <div className='form-password'>
            {/* <label htmlFor="text">密码:</label> */}
            <input type={inputType} placeholder="请输入密码" onChange={this.handleChange.bind(this, 'password')} />
            <span className="show-pwd" onMouseDown={this.showKey} onMouseUp={this.hideKey}></span>
          </div>
          <div className='form-checkbox'>
            <label>
              <input type="checkbox" name="1" className="tui-checkbox" />
              <span>记住密码</span>
            </label>
            <label>
              <input type="checkbox" name="1" className="tui-checkbox" />
              <span>自动登录</span>
            </label>
          </div>
          <div className='form-login'>
            <button className="login-button" onClick={this.handleLogin}>
              登陆
            </button>
          </div>
          {/* <button className="login-button">自动注册</button> */}
          <div className='form-other'>
            <a href="javascript:void(0)">自动注册</a>
            <a href="javascript:void(0)">忘记密码</a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
