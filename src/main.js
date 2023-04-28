import { createApp } from 'vue'
import App from './App.vue'//首页面
import router from './router'
import {createPinia} from 'pinia'
import piniaPersist from 'pinia-plugin-persist' //引入 pinia-plugin-persist
import MyComponent from './components/MyComponent.vue'
const pinia=createPinia()
pinia.use(piniaPersist) //pinia 使用插件
import axios from 'axios'; 
import 'element-plus/dist/index.css' //引入element-plus 样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const  app=createApp(App)

//全局注册组件
app.component('MyComponent',MyComponent)
app.use(router)
app.use(pinia)
app.mount('#app') //挂在index.html

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.config.globalProperties.$axios=axios;