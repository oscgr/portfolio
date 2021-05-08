import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './router'
import yall from 'yall-js'

document.addEventListener('DOMContentLoaded', () => {
  console.log('test')
  yall()
})

createApp(App)
  .use(router)
  .directive('prevent-context-menu', {
    beforeMount(el) {
      el.oncontextmenu = (e) => {
        e.preventDefault()
      }
      el.addEventListener('mouseup', (e) => {
        if (typeof e === 'object' && e.button === 2) {
          console.warn("Right click's context menu is prevented")
        } else {
          console.log(e)
        }
      })
    },
  })
  .mount('#app')
