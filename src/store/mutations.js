import { GET_USERINFO, RECORD_USERINFO, SAVE_GEOHASH, RECORD_ADDRESS } from './mutation-types.js'

import { setStore, getStore } from '../config/mUtils'

export default {

  //获取用户信息存入vuex
  [GET_USERINFO](state, info) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return;
    };
    if (!state.login) {
      return
    }
    if (!info.message) {
      state.userInfo = { ...info };
    } else {
      state.userInfo = null;
    }
  },

  // 记录用户信息
  [RECORD_USERINFO](state, info) {
    state.userInfo = info;
    state.login = true
    setStore('user_id', info.user_id)
  },

  // 保存geohash
  [SAVE_GEOHASH](state, geohash) {
    state.geohash = geohash;
  },

  // 保存经度纬度
  [RECORD_ADDRESS](state, { latitude,
    longitude }) {
    state.latitude = latitude;
    state.longitude = longitude;
  }
}