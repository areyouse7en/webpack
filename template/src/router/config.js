// 同步
// import index from '@/components/index.vue'
// 异步
const index = () =>
  import ( /* webpackChunkName: "index" */ '@/components/index.vue')

const routes = {
  path: '',
  title: '首页',
  component: index,
  meta: {
    requiresAuth: false
  }
}

export default {
  mode: 'history',
  routes
}
