import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Linker from '@linker-design/linker';
import LinkerIcon from '@linker-design/linker/es/icon';

import App from './App.vue'
import router from './router'

import { useComponents } from '@/components'
import { useDirectives } from '@/directives'

import { CONFIG } from '@/utils/configuration';

import '@linker-design/linker/dist/linker.less';
import './style/index.scss';

CONFIG.loadAsync().then(() => {
  const app = createApp(App);

  app.use(createPinia());
  app.use(router)
  app.use(Linker);
  app.use(LinkerIcon);
  
  useComponents(app);
  useDirectives(app);

  app.mount('#app')
})


