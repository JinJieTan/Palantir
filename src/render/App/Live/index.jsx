import React from 'react';
import './index.less'
import Header from '../Header';
import ErrorBoundary from '../ErrorBoundary';

export default class Live extends React.Component {
  constructor(props){
      super(props);
		  this.state = {
			  imgSrc: require('../assets/image/4.jpeg'),
		  };
    }
	componentWillMount(){

	}
	render() {
		return (
			<div id="Live">
        <div className="liveContent">
	        <div className="current">
						<button>进入直播间</button>
	        </div>
	        <ul className="list">
		        <li className="item">
			        <img src={this.imgSrc} alt=""/>
		        </li>
	        </ul>
        </div>
			</div>
		);
	}
}

