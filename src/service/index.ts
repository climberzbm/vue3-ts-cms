import ZBRequest from './request'
import { BASE_URl, TIME_OUT } from './request/config'

const token = '121'

export default new ZBRequest({
  baseURL: BASE_URl,
  timeout: TIME_OUT,
  headers: {
    Authorization: `Bearer ${token}`
  },
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },

    responseInterceptor: (res) => {
      return res
    }
  }
})
