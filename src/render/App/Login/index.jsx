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
    const result = await login({ username: this.username, password: sha1(this.password) });
    if (result.code === 0 || result.code === 1) {
      this.username = '';
      this.password = '';
      alert('登陆成功');
      this.props.history.replace('/video');
    } else {
      alert('请求失败');
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
    const { isShowAnimation, name, isShowLogin } = this.state;
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
            <label htmlFor="text">账号:</label>
            <input type="text" onChange={this.handleChange.bind(this, 'username')} />
          </div>
          <div>
            <label htmlFor="text">密码:</label>
            <input type="password" onChange={this.handleChange.bind(this, 'password')} />
          </div>
          <button className="login-button" onClick={this.handleLogin}>
            登陆
          </button>
          <button className="login-button">注册</button>
        </div>
      </div>
    );
  }
}

export default connect()(App);
