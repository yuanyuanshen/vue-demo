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
export const accountLogin = data => {
  return axios({
    url: '/apis/v2/login',
    method: 'post',
    data
  })
}

// 根据城市id获取城市名称
export const currentcity = params => {
  return axios({
    url: `/apis/v1/cities/${params}`,
    method: 'get',
  })
}

// 获取城市搜索结果
export const searchplace = (cityid, value) => {
  return axios({
    url: '/apis/v1/pois',
    method: 'get',
    params: {
      type: 'search',
      city_id: cityid,
      keyword: value
    }
  })
}

// 获取msite页面地址信息
export const msiteAddress = (geohash) => {
  return axios({
    url: `/apis/v2/pois/${geohash}`,
    method: 'get',
  })
}

// 检测账号是否存在
export const checkExsis = (checkNumber, type) => {
  return axios({
    url: '/apis/v1/users/exists',
    method: 'get',
    params: {
      [type]: checkNumber,
      type
    }
  })
}

// 获取短信验证码
export const mobileCode = phone => {
  return axios({
    url: '/apis/v4/mobile/verify_code/send',
    method: 'post',
    data: {
      mobile: phone,
      scene: 'login',
      type: 'sms'
    }
  })
}

// 获取msite页面食品分类列表
export const msiteFoodTypes = geohash => {
  return axios({
    url: '/apis/v2/index_entry',
    method: 'get',
    params: {
      geohash: geohash,
      group_type: '1',
      'flags[]': 'F'
    }
  })
}

// 获取店铺列表
export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
  
  let supportStr = '';
  support_ids.forEach(item => {
    if (item.status) {
      supportStr += '&support_ids[]=' + item.id;
    }
  });

  let data = {
    latitude,
    longitude,
    offset,
    limit: '20',
    'extras[]': 'activities',
    keyword: '',
    restaurant_category_id,
    'restaurant_category_ids[]': restaurant_category_ids,
    order_by,
    'delivery_mode[]': delivery_mode + supportStr
  };

  return axios({
    url: '/apis/shopping/restaurants',
    method: 'get',
    params: data
  })
}



export default {
  hotCity,
  guessCity,
  groupCity,
  getUser,
  getcaptchas,
  accountLogin,
  currentcity,
  searchplace,
  msiteAddress,
  checkExsis,
  mobileCode,
  msiteFoodTypes,
  shopList
}