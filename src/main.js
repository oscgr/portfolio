import {createApp} from 'vue'
import './index.css'
import App from './App.vue'

createApp(App)
    .directive('prevent-context-menu', {
        beforeMount(el) {
            el.oncontextmenu = (e) => {
                e.preventDefault()
            };
            el.addEventListener('mouseup', (e) => {
                if (typeof e === 'object' && e.button === 2) {
                    console.warn('Right click\'s context menu is prevented')
                } else {
                    console.log(e)
                }
            });

        }
    })
    .mount('#app')
