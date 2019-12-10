import Router from 'vue-router'
import Vue from 'vue'
import helloworld from '@/pages/helloworld'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      name: 'Index',
      path: '/',
      component: helloworld
    },
    {
      name: 'page1',
      path: '/page1',
      component: () => import('@/pages/page1')
    }
  ]
})

export default router
