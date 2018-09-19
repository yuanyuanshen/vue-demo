/*
 * @Author: shenyuanyuan 
 * @Date: 2018-09-19 17:46:31 
 * @Last Modified by: shenyuanyuan
 * @Last Modified time: 2018-09-19 17:53:21
 */

import axios from 'axios'
import config from './config'
import qs from 'qs'

export default function $axios(options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: config.baseURL,
            headers: {},
            transformResponse: [function (data) { }]
        })
    })

    
}
