import axios from './api'


export const getHotCity = params => {
    return axios({
        url: '/apis/v1/cities',
        method: 'get',
        params: { type: 'hot' }
    })
}

export const mock = params => {
    return axios({
        url: '/mock',
        method: 'get',
        params
    })
}

export const upload = data => {
    return axios({
        url: '/upload',
        method: 'post',
        data
    })
}

export default {
    getHotCity,
    mock,
    upload
}
