import Vue from 'vue'
import Router from 'vue-router'
import Test from "@/view/test"
import Page1 from "@/view/page1"
import Page2 from "@/view/page2"
import Goods from "@/view/goods"
import Home from "@/view/home"
import Classify from "@/view/classify"
Vue.use(Router)

export default new Router({
  routes: [

    {
        path: '/test',
        name: 'Test',
        component: Test,
        children:[
            {
              path:"page1",
                name:"page1",
                component:Page1,
            },
            {
                path:"page2",
                name:"page2",
                component:Page2,
            }
        ]
    },
      {
          path:'/goods',
          name:'goods',
          component:Goods,
      },
      {
          path:'/',
          name:'Home',
          components:{
              default:Home,
          },
      },
      {
          path:'/classify',
          name:'Classify',
          component:Classify,
      },
  ]
})
