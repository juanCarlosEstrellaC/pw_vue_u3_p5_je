import { createApp } from 'vue'
import App from './App.vue'

// Importamos el router
import router from './router/router'

createApp(App).use(router).mount('#app')
