import { createApp } from 'vue'
import App from './App.vue'
import moment from 'moment/moment'
import VueTheMask from 'vue-the-mask'


const app = createApp(App)
app.config.globalProperties.$moment = moment
app.use(VueTheMask)
app.mount('#app')
