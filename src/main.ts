import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import * as plugins from '@/plugins';

const app = createApp(App);

const setupPlugin = () => {
  plugins.setupAssets();
  plugins.setupAntdv(app);
  plugins.setupPinia(app);
};

const setupApp = async () => {
  setupPlugin();
  app.use(router);
  app.mount('#app');
};

setupApp();
