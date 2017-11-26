// 同步
// import index from '@/components/index.vue'
// 异步
const index = () =>
  import ( /* webpackChunkName: "index" */ '@/components/index.vue')

const routes = [{
  path: '/',
  component: index
}]

export default {
  mode: 'history',
  routes
}
