const state = {
  name: 'testStore'
}

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  }
}

const actions = {
  
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}