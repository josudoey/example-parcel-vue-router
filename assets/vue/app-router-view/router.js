
import 'babel-polyfill'
const page404 = function (resolve) {
  resolve({
    template: '<h1>page not found</h1>',
    data: function () {
      return {}
    }
  })
}

const page501 = function (resolve) { /* eslint-disable-line */
  resolve({
    template: '<h1>page not implment</h1>',
    data: function () {
      return {}
    }
  })
}

exports = module.exports = {
  base: '/',
  mode: 'hash',
  linkActiveClass: 'router-link-active',
  routes: [{
    name: 'index',
    path: '/',
    redirect: 'demo'
  }, {
    name: 'demo',
    path: '/demo',
    component: function (resolve) {
      return import('../page/demo').then(resolve)
    }
  }, {
    name: '404',
    path: '/:any*',
    component: page404
  }]
}
