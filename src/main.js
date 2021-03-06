import Vue from 'vue'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'
import App from './App'

// 集成ElementUI
Vue.use(ElementUI) // 其实在注册组件
Vue.use(VueLazyload, {
    loading: require('./statics/site/images/01.gif')
})
import 'element-ui/lib/theme-chalk/index.css'

/** 导入自己的样式 */
import "./statics/site/css/style.css"

// 在浏览器端建议使用 import es6的module形式导入模块
import router from './router'

// 导入过滤器
import './filters'

// 导入store
import store from './store'

new Vue({
    router, //$route、$router
    store, //$store
    render:h=>h(App)
}).$mount('#app')
