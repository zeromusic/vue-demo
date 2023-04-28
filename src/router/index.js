 //引入vue-router
 import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'

//ES6 import 输入 export输出
//模块化 默认私有，如何被别人使用
//通过export输出
//如何使用
// export default 默认输出

import Index from'../views/static/index.vue'
import User from'../views/static/user.vue'
import Info from '@/views/static/info.vue'
import Footer from '@/layout/footer.vue'
import Header from '@/layout/header.vue'
import LayoutAdmin from '@/layout/admin/index.vue'

//白名单
const whiteList=[
   "/",
   "/login"
]
import { useUserStore } from '../stores/user'
//路由表 path,name,component叫做路由对象
 const routes=[
    {
      path:'/',//访问路径http://localhost:5173/docx/XfDGdOkjVo7deIxQjurcf8BEnNf  
      name:'home',//命名路由
      components:{
         default:Index,   //key:value 默认
         Footer,          //命名视图
         Header,  
      }//页面组件 components 普通组件   页面组件和普通组件是一对多的关系
   },
    {
      path:'/index',//访问路径http://localhost:5173/docx/XfDGdOkjVo7deIxQjurcf8BEnNf  
      redirect:'/'
   },
   {
      path:'/adcate',
      name:'adCate',
      component:()=>import('../views/static/adCate.vue')
   },
    {
     path:'/user',
     name:'user',
     component: User,
     meta:{
      tittle:'user页面',
      Auth:true
     }
    },
    {
      path:'/user/:id(\\d+)',
      name:'userId',
      component: User,
      props:true,
   },
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/static/login.vue')//懒加载
     },
     {
      path:'/object',
      name:'object',
      component:()=>import('../views/static/object.vue'),//懒加载
      children:[
         {
            path:'',
            name:'objectinfo ',//嵌套命名路由
            component:Info
         },
         {
            path:'login',
            component:import('@//views/static/login.vue')
          }
      ]
     },
     {
        path:'/cart',
        name:'cart',
        component:()=>import('../views/static/cart.vue')//懒加载
      },
      {
         path:'/admin',
         name:'admin',
         component:LayoutAdmin,
         children:[
            {
               path:'',
               name:'admin-index',
               component:()=>import('@/views/admin/index.vue')
            },
            {
               path:'info',
               name:'admin-info',
               component:()=>import('@/views/admin/info.vue')
            },
            {
               path:'logout',
               name:'admin-logout',
               component:()=>import('@/views/admin/logout.vue')
            },
            {
               path:'forgetpassword',
               name:'admin-forgetpassword',
               component:()=>import('@/views/admin/forgetpassword.vue')
            },
            {
               path:'changepassword',
               name:'admin-changepassword',
               component:()=>import('@/views/admin/changepassword.vue')
            },
         ]
      },

      {
         path:'/:pathMatch(.*)*',
         name:'404',
         component:()=>import('../views/static/404.vue')//懒加载
      }
 ]

 const router=createRouter({
    //模式
    history:createWebHistory(),
    routes
 }) 
 //路由守卫
 router.beforeEach((to,from,next)=>{
   const userStore = useUserStore();
   if(whiteList.includes(to.path)){
      next();
   }
   else{
      if(userStore.token && userStore.token.length >0 ){
         next();
      }
      else{
         next({name:"/login"});
      }
   }
 })

 export default router;

// route 访问路径，路由
// router 路由管理者
