import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import RouterDemo from '@/components/RouterDemo'
import Other from '@/components/Other'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/router_demo',
      name: 'RouterDemo',
      component: RouterDemo
    },
    {
      path: '/hello_world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    }
  ]
})
