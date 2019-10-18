//统一发送ajax请求的接口,默认不跨域

import ajax from './ajax'
//使用示例
export const reqSlides = () => ajax('/slides')



//这里如果考虑上线需要加上prev前缀，三元运算符根据环境变量  不考虑上线所以我直接写死了 

//const prev = process.env.NODE_ENV === "development" ?  ""   :   "*****上线的请求资源地址"