import axios from 'axios'
// import { ElLoading } from 'element-plus'
import type { AxiosInstance } from 'axios'
import type { ILoadingInstance } from 'element-plus'

import type { ZBRequestInterceptors, ZBRequestConfig } from './types'

export default class ZBRequest {
  instance: AxiosInstance
  interceptors?: ZBRequestInterceptors
  loading?: ILoadingInstance
  isShowLoading?: boolean

  constructor(config: ZBRequestConfig) {
    // this.isShowLoading = config.isShowLoading ?? false
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // this.loading = ElLoading.service({
        //   text: '正在加载',
        //   background: 'rgba(0, 0, 0, 0.2)'
        // })
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res.data
      },
      (err) => {
        this.loading?.close()
        return err
      }
    )
  }

  request<T>(config: ZBRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求拦截
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: ZBRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: ZBRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
}
