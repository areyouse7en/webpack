const states = {}
const getters = {}
const mutations = {}
const actions = {}

// 严格模式
const debug = process.env.NODE_ENV !== 'production'

export default {
  states,
  getters,
  mutations,
  actions,
  strict: debug
}
