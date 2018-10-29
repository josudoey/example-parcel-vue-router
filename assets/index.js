import 'babel-polyfill'

require('nprogress/nprogress.css')

const NProgress = window.NProgress = require('nprogress')
NProgress.start()

async function main () {
  const getRouterView = (await import('./vue/app-router-view')).default
  const routerView = getRouterView(function () {
    NProgress.done()
  })
  window.vm = routerView.$mount('#app')
}

main()
