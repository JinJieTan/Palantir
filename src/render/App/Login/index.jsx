import React from 'react';
import { connect } from 'dva';
import { login, authentication } from '../../utills/API/index';
import sha1 from 'js-sha1';
import './index.less';
class App extends React.PureComponent {
  state = {
    isShowAnimation: true,
    name: 1,
    isShowLogin: false,
    imgSrc:require('../assets/image/4.jpeg'),
  };
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        name: this.state.name + 1,
      });
    }, 2000);
    setTimeout(() => {
      this.setState({
        isShowAnimation: false,
      });
      clearInterval(this.timer);
    }, 6000);
  }

  handleLogin = async () => {
    //点击发送此时应该鉴权 已经保存在内存中 通过this.username 和 this.password 获取～
    const result = await login({ username: this.username, password: sha1(this.password) });
    if (result.code === 0 || result.code === 1) {
      this.username = '';
      this.password = '';
      alert(result.data);
      this.props.history.replace('/video');
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
    const { isShowAnimation, name, isShowLogin ,imgSrc } = this.state;
    return isShowAnimation ? (
      <div className={('login-animation', `animation${name}`)}></div>
    ) : !isShowLogin ? (
      <div
        className="login-css "
        style={{ WebkitAppRegion: 'drag' }}
        onClick={async () => {
          this.setState({
            isShowLogin: true,
          });
          const result = await authentication();
          if (result.code === 0) {
            alert('免登陆');
            this.props.history.replace('/video');
          }
        }}
      ></div>
    ) : (
          <div className="login-container">
            <div className="login-content">
              <div>
                <label htmlFor="text" className="login-title" >Palantir</label>
              </div>
              <div>
                <img src={imgSrc} />
              </div>
              <div>
                {/* <label htmlFor="text">账号:</label> */}
                <input type="text" placeholder='请输入账号' onChange={this.handleChange.bind(this, 'username')} />
              </div>
              <div>
                {/* <label htmlFor="text">密码:</label> */}
                <input type="password" placeholder='请输入密码' onChange={this.handleChange.bind(this, 'password')} />
              </div>
              <div>
                <label>
                  <input type='radio' name='1' />
                  <span>记住密码</span>
                </label>
                <label>
                  <input type='radio' name='1' />
                  <span>自动登录</span>
                </label>
              </div>
              <button className="login-button" onClick={this.handleLogin}>
                登陆
              </button>
              <button className="login-button">自动注册</button>
              <a href='javascript:void(0)'>忘记密码</a>
            </div>
          </div>
        );
  }
}

export default connect()(App);
