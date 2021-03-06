//封装好的Promise风格的axios请求公共方法
import axios from 'axios';
//data传入必须是对象
axios.defaults.withCredentials = true;
export default function ajax(url, data, method = 'GET') {
  let promise;
  if (method === 'GET') {
    promise = axios.get(url, { params: data });
  } else {
    promise = axios.post(url, data);
  }
  return promise
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('请求失败了');
      console.error(err);
      console.log('请求失败了');
    });
}
