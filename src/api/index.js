//将拦截器整体导入
import request from '@/request/interceptor'//导入已经写好的拦截器

// 封装所有的API接口

export function Login(params) {
    console.log(params)
    return request({
        url: '/administrator/login',
        method: 'post',
        params: params,
    })
}

export function getRoles(params = {}) {
    return request({
        url: '/Roles/select',
        method: 'post',
        params: params,
    })
}