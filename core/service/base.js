import Request from './http.js';
import Config from '@/config/index.js';

// 创建请求对象
const request = new Request({
  baseURL: Config.baseURL
});

const codeMessage = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

request.interceptors.response.use(response => {
  // 业务处理
  const { data, statusCode  } = response
  const { response: res, code, msg } = data

  // 状态码不是 200 说明出错了
  if (statusCode !== 200) {
    // 及时抛出错误
    // uni.showToast 自行处理 可以配置要不要弹框
    return Promise.reject(codeMessage[statusCode] || '请求失败')
  }

  // 成功了只要数据其他都不要
  if (code === 1) {
    return res
  }

  // 处理 code 不等于 1 的情况
  // uni.showToast 自行处理 可以配置要不要弹框
  return Promise.reject(msg)

}, err => {
  // uni.showToast 自行处理 可以配置要不要弹框
  return Promise.reject(err.errMsg)
})

export default request;