// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import VueMaterial from 'vue-material'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// Vue.use(VueMaterial)
import './assets/theme.scss'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueMaterial)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // ...
  // if () {} else {}
  // console.log(router)
  // console.log(from)
  // console.log(to)
  if (to.name === 'Login') {
    // console.log('login')
    next()
  } else {
    // console.log('bukan login')
    if (localStorage.getItem('token')) {
      var authData = JSON.parse(localStorage.getItem('auth'))
      authData.token = localStorage.getItem('token')
      // console.log(next)
      next()
    } else {
      next()
      router.push('/login')
      // window.location.href = '/login'
      // to.login
      // next('/login')
      // router.push('/login')
    }
  }
  // checkLogin()
  // console.log('middleware auth')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// function checkLogin () {
//   // console.log(authData)
//   // console.log('check login and token')
// }
