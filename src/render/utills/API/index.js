//统一发送ajax请求的接口,默认不跨域

import ajax from './ajax';
//使用示例

// const prev = 'http://localhost:5555';
const prev = 'http://47.106.220.143';
//登陆鉴权
export const login = ({ username, password }) => ajax(`${prev}/login`, { username, password });

//是否免密码登陆
export const authentication = () => ajax(`${prev}/authentication`);

//退出登陆，清除免密码登陆
export const clearSession = () => ajax(`${prev}/clearSession`);

// 首页图片获取
export const getHomeImages = () => ajax(`${prev}/home-images`)


//这里如果考虑上线需要加上prev前缀，三元运算符根据环境变量  不考虑上线所以我直接写死了

//const prev = process.env.NODE_ENV === "development" ?  ""   :   "*****上线的请求资源地址"
