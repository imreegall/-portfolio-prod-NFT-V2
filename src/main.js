import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/style.css'

import router from "./router.js"

const defaultTitle = "Historical collection"

router.beforeEach((to, from, next) => {
  document.title = to.meta['title'] || defaultTitle
  next()
});

createApp(App)
    .use(router)
    .mount('#app')
