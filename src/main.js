import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import store from './store'

loadFonts()

createApp(App)
  .use(store)
  .mount('#app')

