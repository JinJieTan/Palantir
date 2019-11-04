import React, { PureComponent } from 'react';


import "./index.less";

let flag = true;

class HomeSwiper extends PureComponent {

  constructor(props) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
    this.slideToLeft = this.slideToLeft.bind(this);
    this.slideToRight = this.slideToRight.bind(this);
  }

  state = {
    swiperStyle: {},
    swiperBtnStyle: {},
    currentIndex: 0,
    total: 0,
    imgSrcList: [],
    swiperItemStyle: {},
    swiperTabsStyle: {},
    swiperWidthStyle: {}
  };

  render() {
    const {imgSrcList, currentIndex, swiperStyle, swiperBtnStyle, swiperItemStyle, swiperTabsStyle, swiperWidthStyle} = this.state;
    return (
      <div className="home-swiper">
        <div className="swiper" style={{...swiperStyle, ...swiperWidthStyle}}>
          {imgSrcList.map((item, index) => <div className="swiper-item" style={swiperItemStyle}>
            <img key={index} src={item} alt=""/>
          </div>)}
        </div>
        <ul className="swiper-tabs" style={swiperTabsStyle}>
          {imgSrcList.map((_, index) => <li className={index === currentIndex ? "selected" : ""} key={index + "_"} onClick={this.changeTab}></li>)}
        </ul>
        <div className="swiper-btn" onClick={this.slideToLeft} style={swiperBtnStyle}>＜</div>
        <div className="swiper-btn swiper-btn-right" onClick={this.slideToRight} style={swiperBtnStyle}>＞</div>
      </div>
    )
  }

  componentDidMount() {
    const { imgSrcList = []} = this.props;
    if(imgSrcList.length === 0) {
      this.setState({swiperBtnStyle: {opacity: 0}})
    } else {
      let total = imgSrcList.length;
      let swiperItemStyle = { width: 100 / total + "%"}, 
        swiperTabsStyle = {marginLeft: - 20 * total / 2 + 5 + "px"}, 
        swiperWidthStyle = {width: total * 100 + "%"}
      this.setState({total, imgSrcList, swiperItemStyle, swiperTabsStyle, swiperWidthStyle})
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  timer = setInterval(() => {
    this.slideToRight()
  }, 3000);

  slideToLeft() {
    let {total, currentIndex} = this.state;
    let swiperStyle = {};
    if(flag) {
      flag = false;
      if(currentIndex > 0) {
        swiperStyle = {
          left: - 100 * (currentIndex - 1) + "%"
        };
        currentIndex -= 1
      } else {
        swiperStyle = {
          left: - 100 * (total - 1) + "%",
          transition: "all .6s"
        }
        currentIndex = total - 1
      }
      this.setState({swiperStyle, currentIndex});
      setTimeout(() => {flag = true}, 600)
    }
  }

  slideToRight() {
    let {total, currentIndex} = this.state;
    let swiperStyle = {};
    if(flag) {
      flag = false;
      if(currentIndex < total - 1) {
        swiperStyle = {
          left: - 100 * (currentIndex + 1) + "%"
        };
        currentIndex += 1
      } else {
        swiperStyle = {
          left: 0,
          transition: "all .6s"
        }
        currentIndex = 0
      }
      this.setState({swiperStyle, currentIndex});
      setTimeout(() => {flag = true}, 600)
    }
  }

  changeTab() {
    const swiperStyle = {
      left: "-100%"
    };
    this.setState({swiperStyle})
  }
}

export default HomeSwiper;