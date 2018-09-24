import axios from './api'
import { setStore, getStore } from '../config/mUtils'

// 获取热门城市
export const hotCity = params => {
    return axios({
        url: '/apis/v1/cities',
        method: 'get',
        params: { type: 'hot' }
    })
}

// 获取定位城市
export const guessCity = params => {
    return axios({
        url: '/apis/v1/cities',
        method: 'get',
        params: { type: 'guess' }
    })
}

// 获取城市列表
export const groupCity = params => {
    return axios({
        url: '/apis/v1/cities',
        method: 'get',
        params: { type: 'group' }
    })
}

// 获取用户信息
export const getUser = params => {
    return axios({
        url: '/apis/v1/user',
        method: 'get',
        params: { user_id: getStore('user_id') }
    })
}

// 获取验证码信息
export const getcaptchas = params => {
    return axios({
        url: '/apis/v1/captchas',
        method: 'post',
        params
    })
}

// 账号密码登录
export const accountLogin = params => {
    return axios({
        url: '/apis/v2/login',
        method: 'post',
        params
    })
}


export default {
    hotCity,
    guessCity,
    groupCity,
    getUser,
    getcaptchas,
    accountLogin
}