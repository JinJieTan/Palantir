import React from 'react';
import './index.less'

export default class Header extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			imgSrc: require('../assets/image/4.jpeg'),
		};
	}
	render() {
		const { imgSrc } = this.state;
		return (
			<div className="headerClass">
				<img src={ imgSrc }/>
				<label htmlFor="text" >
					Palantir
				</label>
				<button>{'<'}</button>
				<button>{'>'}</button>
				<button onClick={()=>this.props.history.push(`/home`)}>首页</button>
				<button onClick={()=>this.props.history.push(`/home/live`)}>直播</button>
				<input placeHolder="search" />
				<img src={ '#' } />
				<label onClick={() => this.props.history.push(`/home/uc`)}>用户名</label>
				<button>点我投稿</button>
				<div className="btnGroup">
				</div>
			</div>
		);
	}
}
