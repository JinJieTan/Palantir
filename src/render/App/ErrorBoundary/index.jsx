import React, { Component } from 'react';
//全局的错误捕获对象，显示错误信息  //后期根据用户体验可改成其他
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { errorInfo: '' };
  }

  componentDidCatch(error) {
    this.setState({ errorInfo: error && error.stack });
  }

  render() {
    if (this.state.errorInfo) {
      return <h1 style={{ background: '#fff' }}>{this.state.errorInfo}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
