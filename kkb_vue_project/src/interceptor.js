// 用于拦截请求和响应

import axios from 'axios'

export default function (vm) {
  // 设置请求拦截器
  axios.interceptors.request.use(config => {
    //  获取token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.token = token
    }
    return config
  })

  //响应拦截器
  //参数1表示成功响应
  //只关心失败的响应
  axios.interceptors.response.use(null, err => {
    if (err.response.status === 401) { //没有登录或令牌过期
      vm.$store.dispatch('logout')
      vm.$router.push('/login')
    }
    return Promise.reject(err)
  })
}

