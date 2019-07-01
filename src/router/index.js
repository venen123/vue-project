import Vue from 'vue'
import Router from 'vue-router'
import venen from '@/components/venen'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/venen',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'venen',
      component: venen
    }
  ]
})
