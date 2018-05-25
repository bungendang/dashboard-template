import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Settings from '@/components/Settings'
import Profile from '@/components/Profile'
import NotFound from '@/components/NotFound'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
