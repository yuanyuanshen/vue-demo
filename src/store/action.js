import { GET_USERINFO } from './mutation-types.js'
import { getUser } from '../http/interface'

export default {
    async getUserInfo({ commit, state }) {
        let res = await getUser();
        commit(GET_USERINFO, res)
    },
    async saveAddress({ commit, state }) {
        if (state.removeAddress.length > 0) return;
        let addres = await getAddressList(state.userInfo.user_id);
        commit(SAVE_ADDRESS, addres);
    },
}