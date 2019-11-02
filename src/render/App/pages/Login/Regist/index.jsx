import React from 'react';
import { connect } from 'dva';
import { ipcRenderer } from 'electron';
import './index.less';
import test from '@v/startVUe.js';
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
      pwd: '',
      isAgree: false,
      uidErrTip: '',
      pwdErrtip: '',
      pwdAgainErrTip: '',
      phoneErrTip: '',
      agreeErrtip: ''
    };
  }

  handleCheckReg(tag,e) {
    const userReg = ''
    const pwdReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
    const phoneReg = /^1[3456789]\d{9}$/
    switch(tag) {
        case 'userID': {
            if(e.target.value.length >= 6) {
                this.setState({
                    userID: e.target.value,
                    uidErrTip: ''
                })
            } else {
                this.setState({
                    uidErrTip: '请输入至少6位'
                })
            }
            break;
        }
        case 'pwd': {
            if(pwdReg.test(e.target.value)) {
                this.setState({
                    pwd: e.target.value,
                    pwdErrtip: ''
                })
            } else {
                this.setState({
                    pwdErrtip: "8-16个字符，至少1个大写字母，1个小写字母和1个数字"
                })
            }
            break;
        }
        case 'pwdAgain': {
            if(e.target.value !== this.state.pwd) {
                this.setState({
                    pwdAgainErrTip: '请输入相同的密码'
                })
            } else {
                this.setState({
                    pwdAgainErrTip: ''
                })
            }
            break;
        }
        case 'phone': {
            if(phoneReg.test(e.target.value)) {
                this.setState({
                    phone: e.target.value,
                    phoneErrTip: ''
                })
            } else {
                this.setState({
                    phoneErrTip: '请输入正确的手机号码'
                })
            }
            break;
        }
    }
  }
  handleRegist() {
    if(!this.state.isAgree) {
        this.setState({
            agreeErrTip: '请先勾选协议'
        })
    }
    const pwdReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
    const phoneReg = /^1[3456789]\d{9}$/
      if(this.state.userID.length >=6 
        && pwdReg.test(this.state.pwd)
        && phoneReg.test(this.state.phone)
      ) {
        alert('注册成功')
        this.props.history.replace('/login');
      }
  }

  handldAgree(e) {
      this.setState({
          isAgree: e.target.checked
      })
  }

  componentDidMount() {
    test(this.props);
  }

  render() {
    const { imgSrc, inputType } = this.state;
    return (
      <div className="registContain">
        <div id="text"></div>
        <h3>注册</h3>
        <form>
           <div className="formItem">
               <label>账号:</label>
               <input placeHolder="请输入用户名" onBlur={this.handleCheckReg.bind(this, 'userID')} />
           </div>
           <span class="errtip">{this.state.uidErrTip}</span>

           <div className="formItem">
               <label>密码:</label>
               <input type="password" placeHolder="请输入您要的密码" onBlur={this.handleCheckReg.bind(this, 'pwd')} />
           </div>
           <span class="errtip">{this.state.pwdErrtip}</span>

           <div className="formItem">
               <label>重复密码:</label>
               <input type="password" placeHolder="请再次输入密码" onBlur={this.handleCheckReg.bind(this, 'pwdAgain')} />
           </div>
           <span class="errtip">{this.state.pwdAgainErrTip}</span>

           <div className="formItem">
               <label>手机号码:</label>
               <input placeHolder="请输入您的手机号" onBlur={this.handleCheckReg.bind(this, 'phone')} />
           </div>
           <span class="errtip">{this.state.phoneErrTip}</span>

           <div className="formItem">
               <button>发送验证码</button>
               <input placeHolder="验证码" />
           </div>
           <div className="">
              <input id="check1" type="checkbox" className="Checkbox" onChange={this.handldAgree.bind(this)} /> 
              <label for="check1">我已阅读并同意<a href=''>用户协议</a></label>
           </div>
           <div className="formItem">
             {this.state.isAgree ===false ? <button type="button" disabled className="btnClass">立即注册</button> :
              <button className="btnClass" disabled={this.isAgree} onClick={this.handleRegist.bind(this)}>立即注册</button>
             }
             <span class="errtip">{this.state.agreeErrTip}</span>

           </div>
        </form>
      </div>
      
    );
  }
}

export default connect()(App);
