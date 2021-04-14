import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from '@/components/SvgIcon.vue'
import 'normalize.css'

createApp(App).component('SvgIcon', SvgIcon).use(store).use(router).mount('#app')
