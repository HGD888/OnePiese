import Vue from 'vue'
import App from "../src/app.vue"

import axios from "axios"

// 引入路由
import VueRouter from 'vue-router'

//将配置好的路由文件引入 
import router from '../src/router/index'

// 引入UI库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {Progress } from 'vant'

// 引入Vuex
import store from "./vuex/index"

Vue.use(VueRouter)
Vue.use(Progress)
Vue.use(ElementUI)
// 关闭Vue生产提示
Vue.config.productionTip = false

var vm=new Vue({
    el:"#root",
    // 路由配置项，使用路由文件
    router:router,
    store,
    render:h=>h(App),
    // 全局事件总线
    beforeCreate(){
        Vue.prototype.$bus=this
    }
})

vm.$axios=axios

