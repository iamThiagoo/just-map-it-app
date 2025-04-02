import { createApp } from 'vue'
import App from './App.vue'

import './styles/global.css'
import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";

const app = createApp(App)
app.mount('#app')
