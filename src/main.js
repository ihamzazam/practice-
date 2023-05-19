import './assets/main.css'

import { createApp } from 'vue'
import App from '../imagineHackVue/src/App.vue'
import router from '../imagineHackVue/src/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
