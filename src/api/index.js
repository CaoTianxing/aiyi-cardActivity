import axios from 'axios'


const baseURL = 'http://192.168.3.78:8080/'
axios.defaults.baseURL = baseURL;


// 获取当前所有的卡片
export const  getIndexCard = params => {
  console.log(params)
  return axios.post('card/list.app',params)
    .then(res => res.data);
};
