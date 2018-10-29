import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default function (callback) {
  const router = new VueRouter(require('./router'))
  router.beforeEach(function (to, from, next) {
    next()
  })

  router.beforeEach(function (to, from, next) {
    next()
    callback()
  })

  return new Vue({
    template: '<router-view></router-view>',
    router: router
  })
}
