// 用于拦截请求和响应

import axios from 'axios'

export default function () {
  // 设置请求拦截器
  axios.interceptors.request.use(config => {
    //  获取token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.token = token
    }
    return config
  })
}
