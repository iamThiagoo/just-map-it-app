import { createApp } from 'vue';

import './styles/global.css';
import '@vue-flow/core/dist/style.css';
import '@vue-flow/core/dist/theme-default.css';

import router from './routes/router';
import Layout from './layouts/Layout.vue';

import { addIcons, OhVueIcon } from "oh-vue-icons";
import { BiGithub, LaBrainSolid } from "oh-vue-icons/icons";
import { MdFileuploadOutlined } from "oh-vue-icons/icons";

addIcons(LaBrainSolid, BiGithub, MdFileuploadOutlined);

const app = createApp(Layout);
app.component("v-icon", OhVueIcon);
app.use(router)
app.mount('#app');
