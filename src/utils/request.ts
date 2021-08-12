import Axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { message as Message } from 'antd';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    hideLoading?: boolean
  }
  
  export interface BaseResponse<T = any> {
    code: number
    data: T
    message: string
  }
  
  const service = Axios.create({
    // baseURL: ,
    timeout: 50000,
  })
  
  service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
  
    //   config.headers.token = getToken()
      // eslint-disable-next-line no-param-reassign
      // config.data = qs.stringify(config.data) // 转为 formdata 数据格式
      return config
    },
    (error: { message: string }) => {
      Message.error(error.message)
    },
  )
  
  const request = <T = any>(config: CustomAxiosRequestConfig): Promise<T> => {
    return new Promise((resolve, reject) => {
      service
        .request<BaseResponse<T>>(config)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((err: { message: string }) => reject(err))
    })
  }
  
  request.get = <T = any>(url: string, params?: object): Promise<T> =>
    request({
      method: 'get',
      url,
      params,
    })
  
  request.post = <T = any>(url: string, params?: object): Promise<T> =>
    request({
      method: 'post',
      url,
      data: params,
    })
  
  request.delete = <T = any>(url: string, params?: object): Promise<T> =>
    request({
      method: 'delete',
      url,
      params,
    })
  
  request.put = <T = any>(url: string, params?: object): Promise<T> =>
    request({
      method: 'put',
      url,
      data: params,
    })
  
  request.patch = <T = any>(url: string, params?: object): Promise<T> =>
    request({
      method: 'patch',
      url,
      data: params,
    })
  
  export default request