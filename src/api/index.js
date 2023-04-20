// 当前这个模块：API进行统一管理
import requests from "./request.js"
import mockRequests from "./mockRequest.js"

// 三级联动接口
// /api/product/getBaseCategoryList  get  无参数
export const reqCategoryList = () => {
  return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}
// 发请求: axios 发送请求，返回的是一个 Promise 对象

export const reqGetBannerList = ()=> mockRequests.get('/banner')