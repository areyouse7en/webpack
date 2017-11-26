export default {
  baseURL: '/api',
  before(config) {
    return config
  },
  after(res) {
    if (res.status >= 200 && res.status < 400) {
      // 如果http状态码正常，则直接返回数据
      return res.data
    } else {
      // 异常状态
      return {
        code: -404,
        success: false,
        msg: '网络错误'
      }
    }
  }
}
