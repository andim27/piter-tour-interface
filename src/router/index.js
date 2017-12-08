import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import QuotationList from '@/components/QuotationList'
import QuotationDetails from '@/components/QuotationDetails'
import FirstRoute from '@/components/FirstRoute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/api/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/api/QuotationList',
      name: 'QuotationList',
      component: QuotationList
    },
    {
      path: '/api/QuotationDetails/:id',
      name: 'QuotationDetails',
      component: QuotationDetails
    },
    {
      path: '/firstroute/:name',
      name: 'FirstRoute',
      component: FirstRoute
    }
  ]
})
