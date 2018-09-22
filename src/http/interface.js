import axios from './api'

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
export const groupCity = data => {
    return axios({
        url: '/apis/v1/cities',
        method: 'get',
        params: { type: 'group' }
    })
}

export default {
    hotCity,
    guessCity,
    groupCity
}