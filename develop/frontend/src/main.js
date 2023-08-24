import App from './App.vue';
import router from './router';
import quasarLang from 'quasar/lang/zh-TW';
import dayjs from 'dayjs';
import axios from './service/index';

import { i18n } from '@/plugins/i18n';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';

import 'bootstrap';
import '@quasar/extras/material-icons/material-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

app.use(Quasar, {
  plugins: {},
  lang: quasarLang,
});
app.config.globalProperties.dayjs = dayjs;
app.use(createPinia());
app.use(axios(app));
app.use(router);
app.use(i18n);
app.mount('#app');
