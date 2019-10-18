import React from 'react';
export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Video</h1>
        <button
          onClick={() => {
            this.props.history.replace('/login');
          }}
        >
          返回登陆
        </button>
      </div>
    );
  }
}
