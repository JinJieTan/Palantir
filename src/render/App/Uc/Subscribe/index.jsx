import React, {PureComponent} from 'react';
import './index.less';

class Subscribe extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            subscribe: [
                {
                    title: '特别关注',
                    count: 5
                },
                {
                    title: '美妆博主',
                    count: 15
                },
                {
                    title: '娱乐八卦',
                    count: 25
                },
                {
                    title: '未分组',
                    count: 35
                },
                {
                    title: '已分组',
                    count: 45
                }
            ],
            data: [1, 2, 3, 4],
        }
    }



    render() {
        const {
            props: {},
            state: {
                subscribe,
                data
            }
        } = this;
        return (
            <div className='subscribe'>
                <div className='sider'>
                    <div>
                        <div className='follow'>
                            <h4>关注</h4>
                            <ul>
                                {subscribe.map((item, index) => <li key={item + index}><span>{item.title}</span>{item.count}</li>)}
                            </ul>
                        </div>
                        <div className='fans'>
                            <h4>粉丝(65)</h4>
                        </div>
                    </div>

                </div>
                <div className='content'>
                    <h5>全部关注（65）</h5>
                    {data.map((item, index) => {
                        return (<div className='subscribe_item' key={item + index}>

                        </div>)
                    })}
                </div>
            </div>
        )
    }
}

export default Subscribe;
