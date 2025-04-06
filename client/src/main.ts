import { createApp } from 'vue';

import './styles/global.css';
import '@vue-flow/core/dist/style.css';
import '@vue-flow/core/dist/theme-default.css';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');
