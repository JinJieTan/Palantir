import React from 'react';
import './index.less';
import { connect } from 'dva';
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
  render() {
    const { isShowAnimation, name, isShowLogin } = this.state;
    return isShowAnimation ? (
      <div className={('login-animation', `animation${name}`)}></div>
    ) : !isShowLogin ? (
      <div
        className="login-css "
        style={{ WebkitAppRegion: 'drag' }}
        onClick={() => {
          this.setState({
            isShowLogin: true,
          });
        }}
      ></div>
    ) : (
      <div className="login-container">
        <div className="login-content">
          <div>
            <label htmlFor="text">账号:</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="text">密码:</label>
            <input type="password" />
          </div>
          <button
            className="login-button"
            onClick={() => {
              console.log('登陆');
              this.props.history.replace('/video');
            }}
          >
            登陆
          </button>
          <button className="login-button">注册</button>
        </div>
      </div>
    );
  }
}

export default connect()(App);
