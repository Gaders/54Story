import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import home from './pages/home.vue' 
import card from './pages/card.vue'
import luckDraw from './pages/luckDraw.vue'
import story from './pages/story.vue'

 
Vue.use(Router)  //Vue全局使用Router
 
export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'home',     //路由名称，
      component: home   //对应的组件模板
    },
    {                    //每一个链接都是一个对象
        path: '/card',         //链接路径
        name: 'card',     //路由名称，
        component: card   //对应的组件模板
    },
    {                    //每一个链接都是一个对象
        path: '/luckDraw',         //链接路径
        name: 'luckDraw',     //路由名称，
        component: luckDraw   //对应的组件模板
    },
    {                    //每一个链接都是一个对象
        path: '/story',         //链接路径
        name: 'story',     //路由名称，
        component: story   //对应的组件模板
    },
  ]
})
