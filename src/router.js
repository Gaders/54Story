import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import home from './pages/home.vue' 
import card from './pages/card.vue'
import luckDraw from './pages/luckDraw.vue'
import story from './pages/story.vue'

 
Vue.use(Router)  //Vue全局使用Router
 
export default new Router({
  routes: [              
    {                   
      path: '/',        
      name: 'home',     
      component: home   
    },
    {                    
        path: '/card',         
        name: 'card',    
        component: card   
    },
    {                   
        path: '/luckDraw',        
        name: 'luckDraw',     
        component: luckDraw  
    },
    {                   
        path: '/story',         
        name: 'story',    
        component: story   
    },
  ]
})
