// 对 axios 进行二次封装
import axios from 'axios'
// 引入进度条
import nProgress from 'nprogress'
// 引入进度条的样式
import 'nprogress/nprogress.css'
// nProgress 的 start 方法：进度条开始；done 方法：进度条结束

// 1.利用 axios 对象的 create 方法，创建 axios 实例
// 2.request 就是 axios ，只不过稍微配置一下
const mockRequests = axios.create({
  // 配置对象
  baseURL: '/mock',
  // 请求超时的时间
  timeout: 5000
})

// 请求拦截器：在发送请求之前，做一些事情
mockRequests.interceptors.request.use((config) => {
  // config: 配置对象，在对象里面有一个属性很重要，headers 请求头
  // 进度条开始
  nProgress.start()
  return config
})

// 响应拦截器
mockRequests.interceptors.response.use((result) => {
  // 进度条结束
  nProgress.done()
  return result.data
}, (error) => {
  return Promise.reject(new Error('falie'))
})

export default mockRequests
