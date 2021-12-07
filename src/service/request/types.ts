import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZBRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (config: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (config: any) => any
}

export interface ZBRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ZBRequestInterceptors<T>
  isShowLoading?: boolean
}
