// 引入 mock
import Mock from 'mockjs'
// 引入 json 数据
// webpack 默认对外暴露：图片、json 格式数据
import banner from './banner.json'
import floor from './floor.json'

// mock 数据：第一个参数（请求地址），第二个参数（请求数据）
Mock.mock('/mock/banner',{ code: 200, data: banner })
Mock.mock('/mock/floor',{ code: 200, data: floor })