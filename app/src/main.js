import { createApp } from 'vue'
import App from './App.vue'
import WaveUI from 'wave-ui'
import store from '../store'
import 'wave-ui/dist/wave-ui.css'

const app = createApp(App)
app.use(store)
new WaveUI(app, {
  // Some Wave UI options.
})

app.mount('#app')