import {
  SET_ADDRESS_DATA,SET_EDIT_ADDRESS_DATA,SET_USER_DATA,
} from './mutation-types'

const mutations = {
  [SET_USER_DATA](state, data) {
  	console.log(data);
    state.userData = data
  },
  [SET_ADDRESS_DATA](state, data) {
    state.addressData = data
  },
  [SET_EDIT_ADDRESS_DATA](state, data) {
    state.editAddressData = data
  }
}

export default mutations
